import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Hotreview from './Hotreview/Hotreview'
import './styles/Hotreviews.css'

const Hotreviews = () => {
  const [ hotReviews, setHotReviews ] = useState({"teachers": []})

  useEffect(() => {
    const fetchHotReviews = async () => {
      const { data } = await axios.get('/hotreviews')
      await setHotReviews(data)
      console.log('hot reviews: ', hotReviews)
    }
    fetchHotReviews()
  }, [])
  return (
    <div id="hotReviews">
      {hotReviews.teachers.map((val, index) => {
        return <Hotreview review={val} />
      })}
    </div>
  )
}

export default Hotreviews