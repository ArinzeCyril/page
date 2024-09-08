import React, { useReducer, useState } from 'react'
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

  let btn = ''
  let active = {
    home: false,
    about: false,
    skills: false,
    projects: false,
    contact: false
  }

  const [activeHome, setActiveHome] = useState(`navs active`)
  const [activeAbout, setActiveAbout] = useState(`navs`)
  const [activeSkills, setActiveSkills] = useState(`navs`)
  const [activeProjects, setActiveProjects] = useState(`navs`)
  const [activeContct, setActiveContct] = useState(`navs`)

  function activate(clicked)  {
    btn = clicked
    for (let link in active) {
      active[link] = false
      if (link === btn){
        active[link] = true;
        // console.log(active);
      }
    }
    setActiveHome(`navs ${active.home && 'active'}`)
    setActiveAbout(`navs ${active.about && 'active'}`)
    setActiveSkills(`navs ${active.skills && 'active'}`)
    setActiveProjects(`navs ${active.projects && 'active'}`)
    setActiveContct(`navs ${active.contact && 'active'}`)
  }

  return (
    <nav>
      <button
        className={classes}
        area-expanded={state.areaExpanded}
        onClick={colapse}
      ></button>
      <div className='primary-nav ul' data-visible={state.dataVisible}>
        <Link onClick={colapse} to='/'>
          Home
        </Link>
        <Link onClick={colapse} to='/about'>
          About
        </Link>
        <Link onClick={colapse} to='/skill'>
          Skills
        </Link>
        <Link onClick={colapse} to='/project'>
          Projects
        </Link>
        <Link onClick={colapse} to='/contact'>
          Contacts
        </Link>
      </div>

      <div className='web-nav ul'>
        <Link className={activeHome} onClick={() => activate("home")} to='/'>
          Home
        </Link>
        <Link
          className={activeAbout}
          onClick={() => activate("about")}
          to='/about'
        >
          About
        </Link>
        <Link
          className={activeSkills}
          onClick={() => activate("skills")}
          to='/skill'
        >
          Skills
        </Link>
        <Link
          className={activeProjects}
          onClick={() => activate("projects")}
          to='/project'
        >
          Projects
        </Link>
        <Link
          className={activeContct}
          onClick={() => activate("contact")}
          to='/contact'
        >
          Contacts
        </Link>
      </div>
    </nav>
  )
}
