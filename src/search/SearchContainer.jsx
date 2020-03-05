import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AutocompleteAddress from './AutocompleteAddress'
import DatePicker from './DatePicker'
import { getJourney } from '../services/api'

const SearchContainer = ({ setResults, results }) => {
  const [departureCoordinates, setDepartureCoordinates] = useState({})
  const [arrivalCoordinates, setArrivalCoordinates] = useState({})
  const [startDate, setStartDate] = useState(new Date())

  const changeDepartureAddress = suggestion => {
    setDepartureCoordinates(suggestion ? suggestion.latlng : {})
  }

  const changeArrivalAddress = suggestion => {
    setArrivalCoordinates(suggestion ? suggestion.latlng : {})
  }

  const changeStartDate = date => {
    setStartDate(date)
  }

  const submitForm = () => {
    const formatedDate = startDate.toISOString()
    setResults({ ...results, isLoading: true })
    getJourney(
      departureCoordinates.lat,
      departureCoordinates.lng,
      arrivalCoordinates.lat,
      arrivalCoordinates.lng,
      formatedDate
    )
      .then(res => {
        setResults({ journeys: res.data, error: null, isLoading: false })
      })
      .catch(() => {
        setResults({ journeys: [], error: 'Erreur serveur. Veuillez réessayer', isLoading: false })
      })
  }

  return (
    <div className="searchbar">
      <div className="searchbar_top">
        <div className="select-values">
          <select name="number-travelers">
            <option value="">1 voyageur</option>
          </select>
        </div>

        <div className="select-values">
          <select name="type-travel">
            <option value="go">Aller simple</option>
          </select>
        </div>
      </div>

      <div className="searchbar_bottom">
        <form method="post" className="flex space-between">
          <AutocompleteAddress
            placeholder="9 rue d'Alexandrie, 75002 Paris"
            changeAddress={changeDepartureAddress}
            results={results}
            setResults={setResults}
          />
          <AutocompleteAddress
            placeholder="9 rue d'Alexandrie, 75002 Paris"
            changeAddress={changeArrivalAddress}
            results={results}
            setResults={setResults}
          />
          <DatePicker selectDate={changeStartDate} date={startDate} />
          <Link to="/results" onClick={submitForm} className="submit" />
        </form>
      </div>
    </div>
  )
}

export default SearchContainer
