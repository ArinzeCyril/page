import React, { useReducer } from 'react'
import {Link} from 'react-router-dom'

const raducer = (state, action) => {
  switch (action.type) {
    case 'toggleNav':
      return {
        dataVisible: state.dataVisible,
        areaExpanded: !state.areaExpanded
      }
    case 'mobileNav':
      return {
        dataVisible: !state.dataVisible,
        areaExpanded: state.areaExpanded
      }
    default:
      return state
  }
}

export default function NavBar() {

  const [state, dispatch] = useReducer(raducer, {
    dataVisible: false,
    areaExpanded: false
  })
  const classes = "fa-solid fa-bars mobile-nav-toggle" 
  const colapse = () => {
    dispatch({type: "toggleNav"});
    dispatch({type: "mobileNav"});
  }
  

  return (
    <nav>
      <button  
        className= {classes}
        area-expanded = {state.areaExpanded}
        onClick = {colapse}
      >
      </button>
      <div className="primary-nav ul" data-visible = {state.dataVisible}>
        <Link onClick={colapse} to='/'>Home</Link>
        <Link onClick={colapse} to='/about'>About</Link>
        <Link onClick={colapse} to='/skill'>Skills</Link>
        <Link onClick={colapse} to='/project'>Projects</Link>
        <Link onClick={colapse} to='/contact'>Contacts</Link>
      </div>
    </nav>
  )
}
