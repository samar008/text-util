import React, {useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  
  const [colorMode, setColorMode] = useState("#000000")

  const [clrSelectorTxt, setClrSelectorTxt] = useState('black')

  const colorpicker = () => {
    if(props.mode === 'dark'){
      setClrSelectorTxt('black')
      document.getElementById('colorselector').style.display = 'flex'
      setColorMode('#000000')
    }
    else{
      // setClrSelectorTxt('white')
      document.getElementById('colorselector').style.display = 'none'
    }
  }
  const handleColor = (event) =>{
    setColorMode(event.target.value);
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/textutil/">{props.title}</Link>
        {/* <a className="navbar-brand" href="/">{props.title}</a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/textutil/">Home</Link>
              {/* <a className="nav-link active" aria-current="page" href="/">Home</a> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/textutil/about">{props.aboutText}</Link>
              {/* <a className="nav-link" href="/about">{props.aboutText}</a> */}
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
          <div className='mx-2' id='colorselector' style={{display:'flex'}}>
            <label className="form-check-label mx-2" style={{color : clrSelectorTxt}} htmlFor='DarkModeColor'>Select Dark mode Color</label>
            <input type="color" id="modeColor" value={colorMode} onChange={handleColor} />
            {/* <input type="button" className="btn btn-primary" value="Click" /> */}
          </div>
          <div className={`form-check form-switch my-3 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" aria-checked onChange={() =>{ props.toggleMode(); colorpicker(); }} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.buttonText}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

// Navbar.propTypes = {
//     title : PropTypes.string,
//     aboutText : PropTypes.string
// }

// Sets default values of props if nothing is passed
// Navbar.defaultProps = {
//     title : "Title",
//     aboutText : "About"
// }

// Checks the value of props is not blank
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}
