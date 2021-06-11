import React from 'react'
import style from '../css/Navbar.module.css'
import {useState} from 'react'

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {

  const [search, setSearch] = useState("")

  const handleUpdate = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className={style.navContainer}>
      <div className={style.nav}>
        <div id={style.logo}><span id={style.mea}>Mea</span>Culpa</div>
        <form className={style.searchform}>
          <input type="text" placeholder="Search" onChange={handleUpdate} value={search}></input>
          <button type="button"> 
            <FontAwesomeIcon icon={faSearch} className={style.searchicon} color="lime"/>
          </button>
        </form>
        <button type="button" className="">Submit</button>
        <button type="button" className="">Login</button>
      </div>
      <i className="far fa-circle"></i>
    </div>
  )
}

export default Navbar
