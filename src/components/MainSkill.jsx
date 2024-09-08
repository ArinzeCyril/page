import Myskills from './MySkills';
import {mainSkill} from '../data/skillSet'

export const MainSkill = () => {
    const listSkills = mainSkill.map((skills, i) =>{
        return (
            <Myskills
                key={mainSkill[i].id}
                logo={mainSkill[i].logo}
                name={mainSkill[i].name}
                level={mainSkill[i].level}
            />
        )
    })
  return (
    <main>
        <h1>My Skill Set</h1>
        <div className='cards'>
            {listSkills}
        </div>
    </main>
  )
}
