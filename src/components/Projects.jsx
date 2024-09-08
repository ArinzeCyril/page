import MyProjects from './MyProjects'
import { ProjectList } from '../data/projectList'

export default function Projects() {
  const projects = ProjectList.map((projects, i) => {
    return(
      <MyProjects
          key={ProjectList[i].id}
          id={ProjectList[i].id}
          cover={ProjectList[i].coverPix}
          tittle={ProjectList[i].tittle}
          name={ProjectList[i].name}
          description={ProjectList[i].description}
          lang={ProjectList[i].lang}
          view={ProjectList[i].url}
        />
    )
  })

  return (
    <main>
      <h1>Projects</h1>
      <div className='cards'>
        {projects}
      </div>
    </main>
  )
}
