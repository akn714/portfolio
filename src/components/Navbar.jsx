import React, { useEffect } from 'react'
import './Navbar.css'

export default function Navbar() {

    useEffect(()=>{
        // for(let i=0;i<5;i++){
        //     document.querySelectorAll('.navbar-links a')[i].addEventListener('mouseover', (e)=>{
        //         if(e.target.children[0]==undefined){
        //             e.target.style.color = '#03123f'
        //         }
        //         if(e.target.children[0]!=undefined){
        //             e.target.children[0].style.color = '#03123f'
        //         }
        //     })
        // }
        // for(let i=0;i<5;i++){
        //     document.querySelectorAll('.navbar-links a')[i].addEventListener('mouseout', (e)=>{
        //         if(e.target.children[0]==undefined){
        //             e.target.style.color = '#4ecdd4'
        //         }
        //         if(e.target.children[0]!=undefined){
        //             e.target.children[0].style.color = '#4ecdd4'
        //         }
        //     })
        // }
        document.querySelector('.navbar-links').style.width = '0%'
        document.querySelector('.navbar-links').style.paddingLeft = '0px'
        
        window.onload = function(e){
            document.querySelector('.navbar-links').style.width = '60%'
            if(document.querySelector('.left')) document.querySelector('.left').style.left = '0';
        }
    })

  return (
    <div id='navbar'>
        <a href='/' className="navbar-profile" style={{textDecoration: 'none'}}>
            {/* <img  className="navbar-profile-pic" src="./user-profile.png" alt="" /> */}
            <div className="title">Adarsh Kumar</div>
        </a>
        <div className='navbar-links'>
            <button className="burger" onClick={(e)=>{
                let navbarLinks = document.querySelector('.navbar-links');
                if(navbarLinks.style.width=='0%'){
                    // document.querySelector('.burger').style.background = 'linear-gradient(45deg, #0c1bc7, #a734ff))'
                    document.querySelector('.burger').style.background = 'aqua'
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
        <script src='../../public/Navbar.js'></script>
    </div>
  )
}


// import React, { useEffect } from 'react'
// import './Navbar.css'
// import {
//     Link,
//     Outlet
// } from "react-router-dom";

// export default function Navbar() {

//     useEffect(()=>{
//         // for(let i=0;i<5;i++){
//         //     document.querySelectorAll('.navbar-links a')[i].addEventListener('mouseover', (e)=>{
//         //         if(e.target.children[0]==undefined){
//         //             e.target.style.color = '#03123f'
//         //         }
//         //         if(e.target.children[0]!=undefined){
//         //             e.target.children[0].style.color = '#03123f'
//         //         }
//         //     })
//         // }
//         // for(let i=0;i<5;i++){
//         //     document.querySelectorAll('.navbar-links a')[i].addEventListener('mouseout', (e)=>{
//         //         if(e.target.children[0]==undefined){
//         //             e.target.style.color = '#4ecdd4'
//         //         }
//         //         if(e.target.children[0]!=undefined){
//         //             e.target.children[0].style.color = '#4ecdd4'
//         //         }
//         //     })
//         // }
//         document.querySelector('.navbar-links').style.width = '0%'
//         document.querySelector('.navbar-links').style.paddingLeft = '0px'
        
//         window.onload = function(e){
//             document.querySelector('.navbar-links').style.width = '60%'
//             if(document.querySelector('.left')) document.querySelector('.left').style.left = '0';
//         }
//     })

//   return (
//     <>
//         <div id='navbar'>
//             <a href='/' className="navbar-profile" style={{textDecoration: 'none'}}>
//                 <img  className="navbar-profile-pic" src="./user-profile.png" alt="" />
//                 <div className="title">Adarsh Kumar</div>
//             </a>
//             <div className='navbar-links'>
//                 <button className="burger" onClick={(e)=>{
//                     let navbarLinks = document.querySelector('.navbar-links');
//                     if(navbarLinks.style.width=='0%'){
//                         document.querySelector('.burger').style.background = 'linear-gradient(45deg, #0c1bc7, #a734ff)'
//                         navbarLinks.style.width = '100%'
//                         document.querySelector('.navbar-links').style.paddingLeft = '20px'
//                     }
//                     else{
//                         document.querySelector('.burger').style.background = 'transparent'
//                         navbarLinks.style.width = '0%'
//                         document.querySelector('.navbar-links').style.paddingLeft = '0px'
//                         navbarLinks.style
//                     }
//                 }}>
//                     <div className="line"></div>
//                     <div className="line"></div>
//                     <div className="line"></div>
//                 </button>
//                 <Link to="/about" className="about">About</Link>
//                 <Link to="/skills" className="skills">Skills</Link>
//                 <Link to="/projects" className="projects">Projects</Link>
//                 <Link to="/education" className="education">Education</Link>
//                 <Link to="/contact" className="contact">Contact</Link>
//             </div>
//             <script src='../../public/Navbar.js'></script>
//         </div>
//         <Outlet />
//     </>
//   )
// }


