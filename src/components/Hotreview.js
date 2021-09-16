import React from 'react'
import style from '../css/Hotreview.module.css'

const Hotreview = ({review}) => {
  return (
    <div className={style.review}>

      <div className={style.flexReviewContainer}>
      
      <div className="top">
      <div>
        <h1>{review.name}</h1>
      </div>
      <div>
        <h2>{review.department}</h2>
      </div>
      <hr></hr>
        <div className={style.reviewbody}>
          <div className={style.reviewdate}>
            {review.date}
          </div>
          <div className={style.reviewcontent}>
            {review.content}
          </div>
        </div>
        </div>


        <div className={style.reviewbottom}>
          <button>View Full</button>
          <div>
            <span className={style.agree}> Agree {review.agree} </span> |
            <span className={style.disagree}> Disagree {review.disagree} </span>
          </div>
        </div>

        </div>
    </div>
  )
}

export default Hotreview
