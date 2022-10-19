
import { projects } from "../../projects"
import "./project.css"



const ProjectItem = () => {

    return (
        <>
            <div className='project'>
                <h1 className='p-title'>Projects</h1>
                <div className="card-container">
                    {projects.map((item, index) => {
                        return (
                            <div key={index} className="card" data-aos ="fade-up">
                                <div className='c-design'>
                                    <div className="c-circle"></div>
                                    <div className="c-circle"></div>
                                    <div className="c-circle"></div>
                                </div>
                                <div className="card-img">
                                    <img src={item.img} alt="" className='project-img' /> <br />
                                </div>
                                <div className="card-info">
                                    <h3 className='c-title'>{item.title}</h3>
                                    <p   className='c-desc'>{item.description}</p>

                                    <button className='preview-btn btn'><a className='prev-link link' href={item.preview} rel="noreferrer" target = "_blank">Preview</a></button>
                                    <button className='code-btn btn'><a className='code-link link' href={item.code} rel="noreferrer" target = "_blank">Code</a></button>
                                </div>
                            </div>)
                    })}
                </div>
            </div>
        </>
    )
}

export default ProjectItem
