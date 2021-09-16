import React from 'react'
import './styles/Hotreview.css'

const Hotreview = ({review}) => {
  return (
    <div className="review">

      <div className="flexReviewContainer">
      
      <div className="top">
      <div>
        <h1>{review.name}</h1>
      </div>
      <div>
        <h2>{review.department}</h2>
      </div>
      <hr></hr>
        <div className="reviewbody">
          <div className="reviewdate">
            {review.date}
          </div>
          <div className="reviewcontent">
            {review.content}
          </div>
        </div>
        </div>


        <div className="reviewbottom">
          <button>View Full</button>
          <div>
            <span className="agree"> Agree {review.agree} </span> |
            <span className="disagree"> Disagree {review.disagree} </span>
          </div>
        </div>

        </div>
    </div>
  )
}

export default Hotreview