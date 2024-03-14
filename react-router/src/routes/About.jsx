import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        <Link to={"/about-details/1"}>About Details</Link>
      </p>
      <p>
        <Link to={"/about-details/2"}>About Details</Link>
      </p>
      <p>
        <Link to={"/about-details/3"}>About Details</Link>
      </p>
    </div>
  )
}

export default About