import 'semantic-ui-css/semantic.min.css'
import 'babel-polyfill'
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import ResultListContainer from './resultList/ResultListContainer'
import DetailedResultContainer from './detailedResult/DetailedResultContainer'
import './style/main.scss'

const App = () => {
  const [results, setResults] = useState({journeys:[], isLoading: false})
  const { journeys } = results;

  return (
    <>
      <Router>
        <Switch>
          <Route
            path="/results"
            exact
            render={() => <ResultListContainer setResults={setResults} results={results} />}
          />
          <Route
            path="/results/:journeyId"
            render={({ match }) => {
              const selectedJourneyId = parseInt(match.params.journeyId, 10)
              const selectedJourney = journeys.find(journey => journey.id === selectedJourneyId)
              return (
                <DetailedResultContainer selectedJourney={selectedJourney} journeys={journeys} />
              )
            }}
          />
          <Route path="/" exact render={() => <Home setResults={setResults} />} />
        </Switch>
      </Router>
    </>
  )
}

export default App
