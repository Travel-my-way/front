import React, { useState } from 'react'
import { sortByCO2 } from '../journey.utils'
import ResultCard from './ResultCard'
import loader from '../img/svg/loader.svg'
import DetailedResultCard from '../detailedResult/DetailedResultCard'

const JourneysList = ({ results }) => {
  const [selectedJourney, setSelectedJourney] = useState(null)
  const { journeys, isLoading, error } = results

  if (isLoading) {
    return (
      <div className="icn-loader">
        <img className="icn-loader-img" src={loader} alt="loader" />
        <p>Calcul des itinéraires</p>
      </div>
    )
  }
  if (error !== null) {
    return <p className="red">{error}</p>
  }

  if (journeys.length === 0 || journeys === undefined) {
    return <p>Désolé, votre recherche n'a abouti à aucun résultat</p>
  }

  const sortedJourneys = sortByCO2(journeys)
  const journeyToDetail = !selectedJourney ? sortedJourneys[0] : selectedJourney
  return (
    <div>
      <h2>Travel my Way vous recommande</h2>
      <div className="flex">
        <div>
          {sortedJourneys.map(journey => (
            <div key={journey.id} className="flex" onClick={() => setSelectedJourney(journey)}>
              <ResultCard journey={journey} journeys={journeys} />
              {journey.id === journeyToDetail.id ? (
                <DetailedResultCard selectedJourney={journeyToDetail} />
              ) : (
                <div />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JourneysList
