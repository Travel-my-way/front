import 'semantic-ui-css/semantic.min.css'
import 'babel-polyfill'
import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import ResultListContainer from './resultList/ResultListContainer'
import './style/main.scss'

const App = () => {
  const [results, setResults] = useState({ journeys: [], isLoading: false, error: null })

  return (
    <>
      <Router>
        <Switch>
          <Route
            path="/results"
            exact
            render={() => <ResultListContainer results={results} setResults={setResults} />}
          />
          <Route path="/" render={() => <Home setResults={setResults} />} />
        </Switch>
      </Router>
    </>
  )
}

export default App
