import React from 'react'
import {useState} from 'react'
import style from '../css/Searchform.module.css'

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Searchbar = () => {
  const [search, setSearch] = useState("")

  const handleUpdate = (e) => {
    setSearch(e.target.value)
  }

  return (
    <form className={style.searchform}>
      <input type="text" placeholder="Search" onChange={handleUpdate} value={search}></input>
      <button type="button"> 
      <FontAwesomeIcon icon={faSearch} className={style.searchicon} color="lime" size="lg"/>
      </button>
    </form>
  )
}

export default Searchbar
