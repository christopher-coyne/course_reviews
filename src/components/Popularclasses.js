import React from 'react'
import classes from '../data/popClasses.json'
import Popclass from './Popclass'

const Popularclasses = () => {
  console.log(classes)
  return (
    <div>
      {classes.classes.map((val, index) => {
        return <Popclass popclass={val} iName="faLaptopCode"/>
      })}
    </div>
  )
}

export default Popularclasses
