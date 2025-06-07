import './Projects.css'
import all_project from '../assets/all_project'
import { FaGithub } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

const Project = () => {
  return (
    <div className='projects' id='project'>
      <h1 className='text-center'>My Project</h1>
      <div className='project-container'>
        {all_project.map((item, i) => (
          <div key={i} className="project-item text-center">
            <a href={item.livedemo} target="_blank"><img src={item.img} alt="" /></a>
            <h2>{item.name}</h2>
            <p className='text-xs'>{item.description}</p>
            <div className="language">
              {item.language.map((lang, i) => (
                <div key={i} className='lang'>{lang}</div>
              ))}
            </div>
            <div className='web'>
              <div className='website'><AiOutlineGlobal size={16} /><a href={item.livedemo} target="_blank">Website</a></div>
              <div className='github'><FaGithub size={16} /><a href={item.saucecode} target="_blank">Source</a></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
