import React from 'react'
import "./Navbar.css"
import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import {Link} from "react-router-dom"


export default function Navbar() {
  return (
    <div className='n'>   
        <div className="links">
          <a href="/"><span className="link-item"><HomeIcon /></span></a>
          <a href="#projects"><span className="link-item"><AssignmentIcon /></span></a>
          <a href="#contact"><span className="link-item"><ContactPageIcon /></span></a>
        </div>
    </div>
  )
}
