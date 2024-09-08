

export default function MyProjects({name, description, cover, view, lang, id}) {
  let pix = ''
    if (cover === "housemaster") {
      pix = require("../images/housemaster.png")
    } else if (cover === "billSplitter") {
      pix = require('../images/billSplitter.png')
    } else if (cover === "littleLemon") {
      pix = require('../images/littleLemon.png')
    } else if (cover === "lilting") {
      pix = require('../images/lilting.png')
    } else if (cover === "flyo") {
      pix = require('../images/flyo.png')
    } else if (cover === "foodmart") {
      pix = require('../images/foodmart.png')
    } else if (cover === "foodmenu") {
      pix = require('../images/foodmenu.png')
    } else if (cover === "blackJack") {
      pix = require('../images/blackJack.png')
    }

  return (
    <div className="card">
      <div className='card-content'>
          <img className='project-pix' src={pix} alt={cover} />
          
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
