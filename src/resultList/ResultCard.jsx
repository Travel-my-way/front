import React from 'react'
import { Icon } from 'semantic-ui-react'
import { getTimeFromDate, getDurationFromSeconds, getPrice } from '../journey.utils'
import StepIcon from '../components/StepIcon'

const longDistanceSteps = ['Plane', 'Car', 'Coach', 'Train']

const renderStep = step => {
  if (longDistanceSteps.indexOf(step.type) !== -1) {
    return (
      <div key={step.id} className="step">
        <StepIcon stepType={step.type} />
        <p className="text-info small">{getDurationFromSeconds(step.duration_s)}</p>
      </div>
    )
  }
  return null
}

const getCategoryJourney = journey => {
  const frCategory = {
    Plane: "l'avion",
    Train: 'le train',
    Car: 'la voiture'
  }
  return frCategory[journey.category[0]]
}

const getEcoComparisonInfo = (journey, journeys) => {
  const mostPollutingJourney = journeys[journeys.length - 1]
  const lessPollutingJourney = journeys[0]

  const ecoComparison = Math.round((journey.total_gCO2 / lessPollutingJourney.total_gCO2) * 10) / 10
  const pollutedComparison =
    Math.round((mostPollutingJourney.total_gCO2 / journey.total_gCO2) * 10) / 10

  if (ecoComparison <= 1.5) {
    return (
      <p className="eco-compare green">
        {pollutedComparison} fois plus écologique que {getCategoryJourney(mostPollutingJourney)}
      </p>
    )
  }
  if (pollutedComparison <= 1.2) {
    return (
      <p className="eco-compare red">
        {ecoComparison} fois plus polluant que {getCategoryJourney(lessPollutingJourney)}
      </p>
    )
  }
  return (
    <p className="eco-compare orange">
      {ecoComparison} fois plus polluant que {getCategoryJourney(lessPollutingJourney)}
    </p>
  )
}

const ResultCard = ({ journey, journeys }) => {
  const departureHour = getTimeFromDate(journey.departure_date)
  const arrivalHour = getTimeFromDate(journey.arrival_date)
  const totalDuration = getDurationFromSeconds(journey.total_duration)
  return (
    <div className="result-card">
      <div className="result-card-content">
        <div className="space-between flex flex-row">
          <div className="inline-flex">
            <div className="info-wrapper">
              <p className="text-large">{departureHour}</p>
              <p className="text-info small">départ</p>
            </div>
            <div className="info-wrapper">
              <p className="text-large">{arrivalHour}</p>
              <p className="text-info small">arrivée</p>
            </div>
          </div>
          <div className="inline-flex right">
            <div className="info-wrapper">
              <p className="text-large">{totalDuration}</p>
              <p className="text-info small">durée totale</p>
            </div>
            <div className="info-wrapper">
              <p className="text-large">{getPrice(journey)}</p>
              <p className="text-info small">prix total</p>
            </div>
          </div>
        </div>
        <div className="step-wrapper">
          <div className="inline-flex">{journey.journey_steps.map(step => renderStep(step))}</div>
          {getEcoComparisonInfo(journey, journeys)}
        </div>
      </div>

      {journey.id === journeys[0].id && (
        <div className="result-card-label">
          <Icon name="leaf" />
          <span>Le plus écologique</span>
        </div>
      )}
    </div>
  )
}

export default ResultCard
