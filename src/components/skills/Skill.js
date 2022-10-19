import React from 'react'
import "./skill.css"

export default function Skill() {
  return (
    <div className='skill'>
    <h2 className='skill-title'>Skills</h2>
        <div className="frontend" data-aos="fade-right">
         <h3 className='s-title'>Frontend</h3>
         <div className="tech">
            <div className="tech-i">
                <span className='tech-title'>HTML</span> <br />
                <span className='tech-level'>Expert</span>
            </div>
            <div className="tech-i">
                <span className='tech-title'>CSS</span>  <br />
                <span className='tech-level'>Intermediate</span>
            </div>
            <div className="tech-i">
                <span className='tech-title'>Bootstrap</span> <br />
                <span className='tech-level'>Intermediate</span>
            </div>
            <div className="tech-i">
                <span className='tech-title'>Javascript</span> <br />
                <span className='tech-level'>Intermediate</span>
            </div>
            <div className="tech-i">
                <span className='tech-title'>React JS</span> <br />
                <span className='tech-level'>Intermediate</span>
            </div>
         </div>
        </div>
        <div className="backend" data-aos="fade-left">
        <h3 className='s-title'>Backend</h3>
        <div className="tech">
            <div className="tech-i">
                <span className='tech-title'>Node JS</span> <br />
                <span className='tech-level'>Intermedaite</span>
            </div>
            <div className="tech-i">
                <span className='tech-title'>Express</span>  <br />
                <span className='tech-level'>Intermediate</span>
            </div>
            <div className="tech-i">
                <span className='tech-title'>EJS</span> <br />
                <span className='tech-level'>Expert</span>
            </div>
            <div className="tech-i">
                <span className='tech-title'>Mongo DB</span> <br />
                <span className='tech-level'>Intermediate</span>
            </div>
            <div className="tech-i">
                <span className='tech-title'>Mongoose</span> <br />
                <span className='tech-level'>Intermediate</span>
            </div>
         </div>
        </div>
    </div>
  )
}
