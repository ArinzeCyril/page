import frontend from '../images/icon/frontend.png'
import backend from '../images/icon/backend.png'
import database from '../images/icon/database.png'
import api from '../images/icon/api.png'
import cmd from '../images/icon/cmd.png'
import css from '../images/icon/css.png'
import express from '../images/icon/express.png'
import git from '../images/icon/git.png'
import html from '../images/icon/html.png'
import http from '../images/icon/http.png'
import js from '../images/icon/js.png'
import json from '../images/icon/json.png'
import node from '../images/icon/node.png'
import npm from '../images/icon/npm.png'
import production from '../images/icon/production.png'
import react from '../images/icon/react.png'
import redux from '../images/icon/redux.png'
import responsive from '../images/icon/responsive.png'
import security from '../images/icon/security.png'
import sql from '../images/icon/sql.png'

export default function MySkills({name, description, level, logo}) {
  const skillLevel = level
  const myStyle = {
    width: skillLevel,
    backgroundColor: "green",
    height: "1rem"
  }
  if (level > '79%') {
    myStyle.backgroundColor = '#1aff1a'
  } else if (level > '49%' && level < "80%") {
    myStyle.backgroundColor = '#ffcccc'
  }else if (level > '30%' && level < '50%') {
    myStyle.backgroundColor = '#ff8c66'
  } else {
    myStyle.backgroundColor ='#ff6666'
  };

  let pix = ''
  switch(logo) {
    case 'frontend':
      pix = frontend;
      break;
    case 'backend':
      pix = backend;
      break;
    case 'database':
      pix = database;
      break;
    case 'api':
      pix = api;
      break;
    case 'cmd':
        pix = cmd;
        break;
    case 'css':
      pix = css;
      break;
    case 'express':
      pix = express;
      break;
    case 'git':
      pix = git;
      break;
    case 'html':
      pix = html;
      break;
    case 'http':
      pix = http;
      break;
    case 'js':
      pix = js;
      break;
    case 'json':
      pix = json;
      break;
    case 'node':
      pix = node;
      break;
    case 'npm':
      pix = npm;
      break;
    case 'production':
      pix = production;
      break;
    case 'react':
      pix = react;
      break;
    case 'redux':
      pix = redux;
      break;
    case 'responsive':
      pix = responsive;
      break;
    case 'security':
      pix = security;
      break;
    case 'sql':
      pix = sql;
      break;
    default:
      pix = 'pix'
      break
  }

  return (
    <div className="card">
      <div className='card-content'>
        <div className='card-pix'>
          <img src={pix} alt="" />
        </div>
        <h2>{name}</h2>
        <p>{description} </p>
      </div>
      <div className='level btm'>
        <div style={myStyle} ></div>
      </div>
    </div>
  )
}
