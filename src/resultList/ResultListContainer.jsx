import React from 'react'
import Header from '../components/Header'
import SearchContainer from '../search/SearchContainer'
import loader from '../img/svg/loader.svg'
import JourneysList from './JourneysList'

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
