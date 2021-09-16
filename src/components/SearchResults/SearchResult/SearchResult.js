import React from 'react'
import './styles.css'
import { useHistory } from "react-router";

const SearchResult = ({ result, type }) => {
  const history = useHistory()
  const goToReview = () => {
    history.push({
      pathname:  `/${type === 'PROF' ? 'professor' : 'course'}/${result.id}`,
   });
  }
  return (
    <div className="resultContainer" onClick={() => goToReview()}>
      <div className="resultFlex">
      <span>
        
        <i class={`fas fa-gem fa-lg ${result.nugget}-nugget`}></i>
        {result.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1,)).join(' ')}

      </span>
      <span className="result-review">{result.reviews} Reviews</span>
      </div>
    </div>
  )
}

export default SearchResult
