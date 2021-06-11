import React from 'react'
import data from '../data/hotReviews.json'
import Hotreview from './Hotreview'
import style from '../css/Hotreviews.module.css'

const Hotreviews = () => {
  return (
    <div id={style.hotReviews}>
      {data.teachers.map((val, index) => {
        return <Hotreview review={val} />
      })}
    </div>
  )
}

export default Hotreviews
