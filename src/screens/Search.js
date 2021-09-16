import { React, useEffect } from 'react'
import Navbar from "../components/Navbar/Navbar";
import style from "../css/Homepage.module.css";
import SearchResults from '../components/SearchResults/SearchResults'
import './styles/search.css'

const Search = ({history}) => {

  const testResults = { courses:
    [
    {name: 'abcdef course', reviews: 14, id: '1748' },
    {name: 'artifical intelligence', reviews: 31, id: '5150' },
    {name: 'computer vision', reviews: 7, id: '7200' },
    ],
  profs: [
    {name: 'adam cannon', reviews: 14, nugget: 'silver', id: '515' },
    {name: 'paul blaer', reviews: 0, nugget: 'none', id: '3409' },
    {name: 'mihalis yannakakis', reviews: 1, nugget: 'gold', id: '2941' },
  ]}
  useEffect(() => {
    console.log('hey')
  }, [])

  return (
    <div>
      <Navbar />
        <div id={style.mainContainer}>
        <div className='resContainer'>
          <h1>Results for {history.location.pathname.split('/search/')[1].split('/')[0]}</h1>
          <h3>Professors</h3>
          <SearchResults results={testResults.profs} type='PROF'/>
        </div>
        <div className='resContainer'>
          <h3>Courses</h3>
          <SearchResults results={testResults.courses} type='COURSE' />
        </div>
        <div className='resContainer'>
          <h3>Related</h3>
        </div>
      </div>
    </div>
  )
}

export default Search
