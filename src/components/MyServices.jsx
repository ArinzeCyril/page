import Pix from '../images/profileLogo.png'

export default function MyServices(props) {
  const { name, description, availability } = props
  const colors = availability === "online" ? "hsl(100, 100%, 50%)" : "hsl(100, 20%, 50%)"
console.log(colors)

  return (
    <div className="card">
        <div className="card-content">
            <img className='card-pix' src={Pix} alt="" />
            <h2>{name} </h2>
            <p>{description} </p>
        </div>
        {/* <button style={{color: colors}} className='service-btn'>{availability} </button> */}
    </div>
  )
}
