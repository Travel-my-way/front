import React, { useState } from 'react'
import ResultCard from './ResultCard'
import Header from '../components/Header'
import SearchContainer from '../search/SearchContainer'
import loader from '../img/svg/loader.svg'
import DetailedResultCard from '../detailedResult/DetailedResultCard'

const sortByCO2 = results => {
  return results.sort((a, b) => a.total_gCO2 - b.total_gCO2)
}

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

const ResultListContainer = ({ results, setResults }) => {
  return (
    <div className="page-results">
      <Header />
      <SearchContainer setResults={setResults} results={results} />
      <main className="content-wrapper">
        <JourneysList results={results} />
      </main>
    </div>
  )
}

export default ResultListContainer
