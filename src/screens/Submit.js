import { React, useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from "../components/Navbar/Navbar";
import style from "../css/Homepage.module.css";
import './styles/submit.css'
import { connect } from 'react-redux'
import { updateProf } from '../actions/submitActions'
import { Form, Button, InputGroup, Container, Row, Col } from "react-bootstrap";

import { Typeahead } from "react-bootstrap-typeahead";
import 'react-bootstrap-typeahead/css/Typeahead.css'

const Submit = ({loading, error, content, workload, prof, course, updateProf}) => {

  const [profQuery, setProfQuery] = useState('')
  const [isProfLoading, setIsProfLoading] = useState(false);

  const [courseQuery, setCourseQuery] = useState('')
  const [isCourseLoading, setIsCourseLoading] = useState(false);


  const [search, setSearch] = useState("");
  const [profMenuOptions, setProfMenuOptions] = useState([]);
  const [courseMenuOptions, setCourseMenuOptions] = useState([]);
  const [valids, setValids] = useState({profs: true, courses: true, workload: true, content: true})

  const handleProfSearch = async query => {
    console.log('query :', query)
    await setProfQuery(query)
    if (query.length < 3) {
      console.log('short query')
      return
    }
    setIsProfLoading(true);

    let { data } = await axios.get(`/profnames/${profQuery}`)
    console.log('data : ', data)
    if (data.prof_res.length >= 10) data.prof_res = data.prof_res.slice(0, 10)
    await setProfMenuOptions(data.prof_res)
    setIsProfLoading(false)
    
  }

  const handleCourseSearch = async query => {
    console.log('query :', query)
    await setCourseQuery(query)
    if (query.length < 3) {
      console.log('short query')
      return
    }
    setIsCourseLoading(true);

    let { data } = await axios.get(`/coursenames/${courseQuery}`)
    console.log('data : ', data)
    if (data.course_res.length >= 10) data.course_res = data.course_res.slice(0, 10)
    await setCourseMenuOptions(data.course_res)
    setIsCourseLoading(false)
    
  }

  const profChange = newQuery => setProfQuery(newQuery)
  const courseChange = newQuery => setCourseQuery(newQuery)

  const submitData = async () => {

    console.log('prof menu query : ', typeof profQuery[0])
    console.log('prof expanded', profMenuOptions.map(prof => prof.name))

    console.log('course menu query : ', typeof courseQuery[0])
    console.log('course expanded', courseMenuOptions.map(course => course.name))

    // validation if empty
    let updateValids = {...valids}

    /*
    if (!courseQuery[0]) {
      updateValids.courses = false
    }

    if (!profQuery[0]) {
      updateValids.profs = false
    } */

    !profMenuOptions.map(prof => prof.name).includes(profQuery[0]) && (updateValids.profs = false)
    !courseMenuOptions.map(course => course.name).includes(courseQuery[0]) && (updateValids.courses = false)

    console.log('prof :', valids.profs)
    console.log('courses :', valids.courses)

    setValids(updateValids)
  }

  return (
    <div>
      <Navbar />
        <h1>profs: {valids.profs ? 'true' : 'false'}  courses {valids.courses ? 'true' : 'false'} </h1>
        <div id={style.mainContainer}>
          <Form id="submit-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Professor Name </Form.Label>
            {/*
            <Form.Control type="email" placeholder="Enter prof name" onChange={e => updateProf(e.target.value)}/> */}
            <Typeahead
              className={valids.profs ? '' : 'is-invalid'}
              isLoading={isProfLoading}
              onInputChange={handleProfSearch}
              id="basic-typeahead-single"
              labelKey="name"
              onChange={profChange}
              options={profMenuOptions.map(o => o.name)}
              placeholder="Search for a professor or course"
              selected={search}
              minLength={3}
              isInvalid={valids.profs ? false : true}
            />
            <Form.Control.Feedback type="invalid">Enter correct professor name</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Course Name</Form.Label>
            <Typeahead
              className={valids.courses ? '' : 'is-invalid'}
              isLoading={isCourseLoading}
              onInputChange={handleCourseSearch}
              id="basic-typeahead-single"
              labelKey="name"
              onChange={courseChange}
              options={courseMenuOptions.map(o => o.name)}
              placeholder="Search for a professor or course"
              selected={search}
              minLength={3}
              isInvalid={valids.courses ? false : true}
            />
            <Form.Control.Feedback type="invalid">Enter correct course name</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Review Content</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
            <Form.Label>Workload</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="button" onClick={() => submitData()}>
            Submit
          </Button>
          </Form>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.submitreview.loading,
    error: state.submitreview.error,
    content: state.submitreview.content,
    workload: state.submitreview.workload,
    prof: state.submitreview.prof,
    course: state.submitreview.prof,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateProf: (profName) => dispatch(updateProf(profName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Submit)
