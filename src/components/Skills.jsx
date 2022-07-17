import MySkills from './MySkills'
import {SkillSet} from '../data/skillSet';

export default function Skills() {
  const mySkill = SkillSet.map((skills, i) => {
    return(
      <MySkills 
        key={SkillSet[i].id}
        logo={SkillSet[i].logo}
        name={SkillSet[i].name} 
        description={SkillSet[i].description}
        level={SkillSet[i].level}
      />
    )
  })

  return (
    <main>
      <h1>My Skill Set</h1>
      <p className='justify'>
        Since my journey into frontend development, I have come across and learnt 
        some useful tools including libraries that have been instumental to my 
        success as a frontend developer.
      </p>
      <p className='justify'>
        I create responsive websites that are fast, easy to use and built with best
        practices. Currently, the main area of my expertise is frontend development,
        though I do a little bit of backend and database.
      </p>
      <p className='justify'>
        My skillset are displayed below.
      </p><br /><br />
      <div className='cards'>
        {mySkill}
      </div> 
    </main>
  )
}
