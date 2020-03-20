import React from 'react'
import StepsCard from './StepsCard'

const DetailedResultCard = ({ selectedJourney }) => {
  return (
    <div className="detailed-result-card">
      <StepsCard steps={selectedJourney.journey_steps} />
      {selectedJourney.booking_link && (
        <a className="button primary" href={selectedJourney.booking_link} target="_blank">
          Réserver
        </a>
      )}
    </div>
  )
}

export default DetailedResultCard
