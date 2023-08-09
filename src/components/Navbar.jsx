import React, { useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {

    useEffect(()=>{
        for(let i=0;i<5;i++){
            document.querySelectorAll('.navbar-links div')[i].addEventListener('mouseover', (e)=>{
                if(e.target.children[0]==undefined){
                    e.target.style.color = '#c70c3e'
                }
                if(e.target.children[0]!=undefined){
                    e.target.children[0].style.color = '#c70c3e'
                }
            })
        }
        for(let i=0;i<5;i++){
            document.querySelectorAll('.navbar-links div')[i].addEventListener('mouseout', (e)=>{
                if(e.target.children[0]==undefined){
                    e.target.style.color = '#c9c9c9'
                }
                if(e.target.children[0]!=undefined){
                    e.target.children[0].style.color = '#c9c9c9'
                }
            })
        }
    })

  return (
    <div id='navbar'>
        <div className="navbar-profile">
            <img  className="navbar-profile-pic" src="./user-profile.png" alt="" />
            <div className="title">Know me</div>
        </div>
        <div className='navbar-links'>
            <div className="about">
                <a href="/about">About</a>
            </div>
            <div className="skills">
                <a href="/skills">Skills</a>
            </div>
            <div className="projects">
                <a href="/projects">Projects</a>
            </div>
            <div className="/education">
                <a href="/education">Education</a>
            </div>
            <div className="contact">
                <a href="/contact">Contact</a>
            </div>
        </div>
    </div>
  )
}
