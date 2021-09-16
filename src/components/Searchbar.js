import React from "react";
import { useState } from "react";
import style from "../css/Searchform.module.css";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, Form, Typeahead } from "react-bootstrap";

const Searchbar = () => {
  const [search, setSearch] = useState("");

  const handleUpdate = (e) => {
    setSearch(e.target.value);
  };

  const options = ["abc", "def", "hij", "klmn", "opqr"];

  /*
  return (
    <form className={style.searchform}>
      <input type="text" placeholder="Search" onChange={handleUpdate} value={search}></input>
      <button type="button"> 
      <FontAwesomeIcon icon={faSearch} className={style.searchicon} color="lime" size="lg"/>
      </button>
    </form>
  )
  */

  return (
    <Fragment>
      <Form.Group>
        <Form.Label>Single Selection</Form.Label>
        <Typeahead
          id="basic-typeahead-single"
          labelKey="name"
          onChange={setSearch}
          options={options}
          placeholder="Choose a state..."
          selected={search}
        />
      </Form.Group>
    </Fragment>
  );
};

export default Searchbar;
