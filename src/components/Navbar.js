import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutTitle}</Link>
            </li>
          </ul>
          <li className="nav-item flex mx-3">
            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">Theme</Link>
            <ul className={`dropdown-menu flex justify-content-end bg-${props.mode}`}>
              <li className="container d-flex ">
                <button onClick={props.setRed} className={`btn btn-sm btn-outline-danger text-right mx-2`}>Red</button>
                <button onClick={props.setBlue} className="btn btn-sm btn-outline-primary text-right mx-2">Blue</button>
                <button onClick={props.setYellow} className="btn btn-sm btn-outline-warning text-right mx-2">Yellow</button>
                <button onClick={props.setGreen} className="btn btn-sm btn-outline-success text-right mx-2">Green</button>
              </li>
            </ul>
          </li>
          <button className={`btn btn-${props.themeColor} my-2`} onClick={props.toggleMode}>{props.btnText}</button>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutTitle: PropTypes.string
}