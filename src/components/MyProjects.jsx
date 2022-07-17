import chess from '../images/chess.png'
import inputSearch from '../images/inputSearch.png'
import flyo from '../images/flyo.png'
import inputForm from '../images/inputForm.png'
import foodmart from '../images/foodmart.png'

export default function MyProjects({name, description, view, lang, id}) {
  let pix = ''
    if (id === 1) {
      pix = flyo
    } else if (id === 2) {
      pix = foodmart
    } else if (id === 3) {
      pix = chess
    } else if (id === 4) {
      pix = inputSearch
    } else if (id === 5) {
      pix = inputForm
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
