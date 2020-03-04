import React from 'react'
import AlgoliaPlaces from 'algolia-places-react'

const AutocompleteAddress = ({ changeAddress, placeholder, results, setResults }) => {
  return (
    <div className="autocomplete-address">
      <AlgoliaPlaces
        placeholder={placeholder}
        className="autocomplete-address-input"
        options={{
          appId: 'plIMLBK6SAIV',
          apiKey: '3eafdf4bffe092bb1a6141c4eda52f9f',
          language: 'fr'
          // Other options from https://community.algolia.com/places/documentation.html#options
        }}
        onChange={({ suggestion, query }) => changeAddress(suggestion, query)}
        onLimit={() =>
          setResults({ ...results, error: "Vous avez atteint votre limite d'utilisation de l'api" })
        }
        onError={() =>
          setResults({ ...results, error: "Erreur lors de l'utilisation de l'api Algolia" })
        }
      />
    </div>
  )
}

export default AutocompleteAddress
