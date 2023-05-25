import housemaster from '../images/housemaster.png'
import billSplittr from '../images/billSplitter.png'
import chess from '../images/chess.png'
import inputSearch from '../images/inputSearch.png'
import flyo from '../images/flyo.png'
import foodmart from '../images/foodmart.png'
import foodmenu from '../images/foodmenu.png'
import colorflipper from '../images/colorflipper.png'
import bggenerator from '../images/bggenerator.png'

export default function MyProjects({name, description, view, lang, id}) {
  let pix = ''
    if (id === 1) {
      pix = housemaster
    } else if (id === 2) {
      pix = billSplittr
    } else if (id === 3) {
      pix = flyo
    } else if (id === 4) {
      pix = foodmart
    } else if (id === 5) {
      pix = foodmenu
    } else if (id === 6) {
      pix = chess
    } else if (id === 7) {
      pix = colorflipper
    } else if (id === 8) {
      pix = inputSearch
    } else if (id === 9) {
      pix = bggenerator
    }
  
  return (
    <div className="card">
      <div className='card-content'>
          <img className='project-pix' src={pix} alt="" />
          <h2>{name} </h2>
          <p>{description}</p>
      </div>
      <div className='flx-sp-in pjt-btn'>
        <a href={view}><button className='view-btn'>View Life</button></a>
        <p className='lang'>{lang}</p>
      </div>
    </div>
  )
}
