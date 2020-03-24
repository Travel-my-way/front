import React from 'react'
import StepsCard from './StepsCard'
import { getCO2InKg } from '../journey.utils'

const DetailedResultCard = ({ selectedJourney }) => {
  const totalCO2InKg = getCO2InKg(selectedJourney.total_gCO2)

  return (
    <div className="detailed-result-card">
      <h3 className="ecology">{totalCO2InKg} de CO2 émis</h3>
      <StepsCard steps={selectedJourney.journey_steps} />
      {selectedJourney.booking_link && (
        <div className="center">
          <a className="button primary" href={selectedJourney.booking_link} target="_blank">
            Réserver
          </a>
        </div>
      )}
    </div>
  )
}

export default DetailedResultCard
