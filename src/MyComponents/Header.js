import React from 'react'
import PropTypes from 'prop-types'
import "./Header.css"

export default function Header(props) {
  return (  
  <ul>
    <li><a className="active" href="#home">To-Do Application</a></li>
  </ul>
  )
}
Header.defaultProps= {
  title : "Your Title Here"
}
Header.propTypes = {
  title: PropTypes.string
}
