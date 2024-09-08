import HeroSection from '../components/HeroSection';
import Profile from '../images/profile.png'
import Abouts from '../components/Abouts';
import {MainSkill} from '../components/MainSkill'
import Projects from '../components/Projects';


export default function Home() {
  return (
    <>
      <HeroSection />
      <div className='h-about-container'>
          <img className='h-about-img' src={Profile} alt="my profile" />
      </div>
      <Abouts />
      <MainSkill />
      <Projects />
    </>
  )
}
