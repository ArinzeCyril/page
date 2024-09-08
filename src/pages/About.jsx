import Abouts from '../components/Abouts';
import Profile from '../images/profile.png'

export default function About() {
  return (
    <>
      <div className='about-header'></div>
      <div className='about-container'>
          <img className='about-img' src={Profile} alt="my profile" />
      </div>
      <Abouts />
    </>
  )
}
