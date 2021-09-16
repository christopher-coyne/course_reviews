import React from "react";
import axios from 'axios'
import './styles/Navbar.css';
import { useState } from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router";

import { Form, Button, InputGroup, Container, Row, Col } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import 'react-bootstrap-typeahead/css/Typeahead.css'

const Navbar = props => {
  const [query, setQuery] = useState('')
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const history = useHistory()

  /*
  const handleSearch = (e) => {
    console.log('value : ', e.target.value)
    setSearch(e.target.value);
  }; */

  const handleSearch = async query => {
    setQuery(query)
    if (query.length < 3) {
      console.log('short query')
      return
    }
    setIsLoading(true);

    const { data } = await axios.get(`/allnames/${query}`)
    let newOptions = data.course_res.map(course => course.name).concat(
      data.prof_res.map(prof => prof.name))
    console.log('data : ', options)
    if (newOptions.length >= 10) newOptions = newOptions.slice(0, 10)
    setOptions(newOptions)
    setIsLoading(false)

    /*
    fetch(`${'/'}?q=${query}+in:login&page=1&per_page=50`)
      .then((resp) => resp.json())
      .then(({ items }) => {
        const options = items.map((i) => ({
          avatar_url: i.avatar_url,
          id: i.id,
          login: i.login,
        }));

        setOptions(options);
        setIsLoading(false);
      });
      */
    
  }

  const tester2 = newQuery => setQuery(newQuery)

  const getSearchResults = () => {
    history.push({
      pathname:  `/search/${query}`,
      state: {
        response: 'responseTest'
      } 
   });
  }

  return (
    <Container fluid className="navContainer">
      <Container className="innerNav">
      <Row>
      <Col className="col-2 col">
        <div id="logo">
          <span id="mea">Mea</span>Culpa
        </div>
      </Col>
      <Col className="col-8 col">
          <Form.Group className="tester">
            <InputGroup>
            <Typeahead
              isLoading={isLoading}
              onInputChange={handleSearch}
              id="basic-typeahead-single"
              labelKey="name"
              onChange={tester2}
              options={options}
              placeholder="Search for a professor or course"
              selected={search}
              minLength={3}
            />
            <InputGroup.Append>
              <Button
                className="btn"
                onClick={() => getSearchResults()}
                variant="outline-secondary">
                <i class="fas fa-search"></i>
              </Button>
            </InputGroup.Append>
            </InputGroup>
          </Form.Group>
          </Col>
        <Col className="col-2 col">
          <button type="button" className="nav-button">
            Submit
          </button>
          <button type="button" className="nav-button">
            Login
          </button>
          </Col>
      <i className="far fa-circle"></i>
      </Row>
      </Container>
    </Container>
  );
};

export default Navbar;