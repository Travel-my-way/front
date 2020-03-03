import React from 'react'
import { Link } from 'react-router-dom'
import ResultCard from './ResultCard'
import Header from '../components/Header'
import SearchContainer from '../search/SearchContainer'
import loader from '../img/svg/loader.svg'

const sortByCO2 = results => {
  return results.sort((a, b) => a.total_gCO2 - b.total_gCO2)
}

const addEcoComparisonToJourney = journeys => {
  const lessEcoJourney = journeys[journeys.length - 1]
  const mostEcoJourney = journeys[0]
  return journeys.map(journey => {
    if (journey.id !== lessEcoJourney.id) {
      return {
        ...journey,
        ecoComparison: Math.ceil(lessEcoJourney.total_gCO2 / journey.total_gCO2),
        mostEcoJourney: journey.id === mostEcoJourney.id
      }
    }
    return {
      ...journey,
      ecoComparison: Math.ceil(journey.total_gCO2 / mostEcoJourney.total_gCO2),
      lessEcoJourney: true
    }
  })
}

const renderJourneysList = results => {
  const { journeys, isLoading } = results
  const noResult = journeys === undefined || journeys.length === 0
  const sortedJourneys = noResult ? [] : addEcoComparisonToJourney(sortByCO2(journeys))
  if (isLoading) {
    return (
      <div className="icn-loader">
        <img className="icn-loader-img" src={loader} alt="loader" />
        <p>Calcul des itinéraires</p>
      </div>
    )
  }
  if (noResult && !isLoading) {
    return <p>Désolé, votre recherche n'a abouti à aucun résultat</p>
  }
  return (
    <div>
      <h2>Travel my Way vous recommande</h2>
      {sortedJourneys.map(journey => (
        <Link key={journey.id} to={`/results/${journey.id}`}>
          <ResultCard journey={journey} />
        </Link>
      ))}
    </div>
  )
}

const ResultListContainer = ({ results, setResults }) => {
  return (
    <div className="page-results">
      <Header />
      <SearchContainer setResults={setResults} results={results} />
      <main className="content-wrapper">{renderJourneysList(results)}</main>
    </div>
  )
}

export default ResultListContainer
