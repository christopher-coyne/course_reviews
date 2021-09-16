import React from 'react'
import SearchResult from './SearchResult/SearchResult'

const SearchResults = ({ results, type }) => {
  return (
    <div>
    {results.map(result => <SearchResult result={result} type={type}/>)}
    </div>
  )
}

export default SearchResults
