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

  const [activeHome, isActiveHome] = useState(`navs active`)
  const [activeAbout, isActiveAbout] = useState(`navs`)
  const [activeSkills, isActiveSkills] = useState(`navs`)
  const [activeProjects, isActiveProjects] = useState(`navs`)
  const [activeContct, isActiveContct] = useState(`navs`)

  // const home = () => {
  //   btn = 'home'
  //   activate()
  //   isActiveHome(`navs ${active.home && 'active'}`)
  // }
  // const about = () => {
  //   btn = 'about'
  //   activate()
  //   isActiveAbout(`navs ${active.about && 'active'}`)
  // }
  // const skills = () => {
  //   btn = 'skills'
  //   activate()
  //   isActiveSkills(`navs ${active.skills && 'active'}`)
  // }
  // const projects = () => {
  //   btn = 'projects'
  //   activate()
  //   isActiveProjects(`navs ${active.projects && 'active'}`)
  // }
  // const contact = () => {
  //   btn = 'contact'
  //   activate()
  //   isActiveContct(`navs ${active.contact && 'active'}`)
  // }
  
  function activate(clicked)  {
    btn = clicked
    for (let link in active) {
      active[link] = false
      isActiveHome('navs')
      isActiveAbout('navs')
      isActiveSkills('navs')
      isActiveProjects('navs')
      isActiveContct('navs')
      if (link === btn){
        active[link] = true; 
        console.log(active);
      } 
    } 
    isActiveHome(`navs ${active.home && 'active'}`)
    isActiveAbout(`navs ${active.about && 'active'}`)
    isActiveSkills(`navs ${active.skills && 'active'}`)
    isActiveProjects(`navs ${active.projects && 'active'}`)
    isActiveContct(`navs ${active.contact && 'active'}`) 
    console.log(`${clicked} is clicked`);
  } 

  // let activate = () => {
  //   for (let link in active) {
  //     active[link] = false
  //     isActiveHome('navs')
  //     isActiveAbout('navs')
  //     isActiveSkills('navs')
  //     isActiveProjects('navs')
  //     isActivecontct('navs')
  //     if (link === btn){
  //       active[link] = true; 
  //       console.log(active);
  //     } 
  //   } 
  // } 

  const activate1 = (home) => {
    activate('home')
  }
  const activate2 = () => {
    activate('about')
  }
  const activate3 = () => {
    activate('skills')
  }
  const activate4 = () => {
    activate('projects')
  }
  const activate5 = () => {
    activate('contact')
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

      <div className="web-nav ul">
        <Link className={activeHome} onClick={activate1} to='/'>Home</Link>
        <Link className={activeAbout} onClick={activate2} to='/about'>About</Link>
        <Link className={activeSkills} onClick={activate3} to='/skill'>Skills</Link>
        <Link className={activeProjects} onClick={activate4} to='/project'>Projects</Link>
        <Link className={activeContct} onClick={activate5} to='/contact'>Contacts</Link>
      </div>

      {/* <div className="web-nav ul">
        <Link className={activeHome} onClick={home} to='/'>Home</Link>
        <Link className={activeAbout} onClick={about} to='/about'>About</Link>
        <Link className={activeSkills} onClick={skills} to='/skill'>Skills</Link>
        <Link className={activeProjects} onClick={projects} to='/project'>Projects</Link>
        <Link className={activeContct} onClick={contact} to='/contact'>Contacts</Link>
      </div> */}
    
    </nav>
  )
}
