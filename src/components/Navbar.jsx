import React, { useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {

    useEffect(()=>{
        for(let i=0;i<5;i++){
            document.querySelectorAll('.navbar-links a')[i].addEventListener('mouseover', (e)=>{
                if(e.target.children[0]==undefined){
                    e.target.style.color = '#6a2ae9'
                }
                if(e.target.children[0]!=undefined){
                    e.target.children[0].style.color = '#6a2ae9'
                }
            })
        }
        for(let i=0;i<5;i++){
            document.querySelectorAll('.navbar-links a')[i].addEventListener('mouseout', (e)=>{
                if(e.target.children[0]==undefined){
                    e.target.style.color = '#9d32fb'
                }
                if(e.target.children[0]!=undefined){
                    e.target.children[0].style.color = '#9d32fb'
                }
            })
        }
        document.querySelector('.navbar-links').style.width = '0%'
        document.querySelector('.navbar-links').style.paddingLeft = '0px'
    })

  return (
    <div id='navbar'>
        <a href='/' className="navbar-profile" style={{textDecoration: 'none'}}>
            <img  className="navbar-profile-pic" src="./user-profile.png" alt="" />
            <div className="title">Adarsh Kumar</div>
        </a>
        <div className='navbar-links'>
            <button className="burger" onClick={(e)=>{
                let navbarLinks = document.querySelector('.navbar-links');
                if(navbarLinks.style.width=='0%'){
                    document.querySelector('.burger').style.background = 'linear-gradient(45deg, #0c1bc7, #a734ff)'
                    navbarLinks.style.width = '100%'
                    document.querySelector('.navbar-links').style.paddingLeft = '20px'
                }
                else{
                    document.querySelector('.burger').style.background = 'transparent'
                    navbarLinks.style.width = '0%'
                    document.querySelector('.navbar-links').style.paddingLeft = '0px'
                    navbarLinks.style
                }
            }}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </button>
            <a href="/about" className="about">About</a>
            <a href="/skills" className="skills">Skills</a>
            <a href="/projects" className="projects">Projects</a>
            <a href="/education" className="/education">Education</a>
            <a href="/contact" className="contact">Contact</a>
        </div>
    </div>
  )
}
