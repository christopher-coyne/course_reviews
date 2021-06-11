import React from 'react'

import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Popclass = ({popclass}) => {
  return (
    <div>
      {popclass.title}
      <FontAwesomeIcon icon={faLaptopCode}/>
      <FontAwesomeIcon icon={faPenFancy} />
      <FontAwesomeIcon icon={faMusic} />
      <i className="fas fa-theater-masks"></i>

    </div>
  )
}

export default Popclass
