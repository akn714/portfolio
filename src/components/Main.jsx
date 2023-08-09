import React from 'react'
import './Main.css'

export default function Main() {
  return (
    <>
      <div id='main'>
        <div className="left">
          <div>
              <div className="name">
                  <div className="hi">Hi, I'm </div>
                  <div className="name-main">Adarsh Kumar</div>
              </div>
              <div className="small-desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius cum qui architecto totam quaerat veniam reprehenderit vel similique perferendis?
              </div>
              <div className="links">
                <a href="https://github.com/adarshkumar714" target='_blank' className="follow-me-on-github">
                  <div>
                    Follow me on Github
                  </div>
                  <img src="./github-mark.png" alt="" style={{height:'32px'}} />
                </a>
                 {/* gmail link here */}
                <a href="#" style={{color:'rgb(106 42 233)'}} target='_blank' className="get-in-touch">
                  <div>
                    Get in Touch
                  </div>
                </a>
              </div>
          </div>
        </div>
        <div className="right">
          <div>
            <div className="profile-links">
            <div className="img">
              <img  className="navbar-profile-pic" src="./user-profile.png" alt="" />
            </div>
              <a href='https://github.com/adarshkumar714' className="profiles github" target='_blank'>
                <div className="website-logo">
                  <img src="./github-mark.png" alt="github" style={{height:'33px'}} />
                </div>
                <p>/adarshkumar714</p>
              </a>
              <a href='https://www.linkedin.com/in/adarsh-kumar-123a34231' className="profiles linkedin" target='_blank'>
                <div className="website-logo">
                  <img src="./LI-In-Bug.png" alt="linkedin" style={{height:'28px'}} />
                </div>
                <p>in/adarsh-kumar-123a34231</p>
              </a>
              <a href='https://twitter.com/AdarshK43393714' className="profiles tweeter" target='_blank'>
                <div className="website-logo">
                  <img src="./twitter-logo.png" alt="twitter" style={{height:'38px'}} />
                </div>  
                <p>/AdarshK43393714</p>
              </a>
              <a href='mailto:adarshkumar20012704@gmail.com' className="profiles tweeter" target='_blank'>
                <div className="website-logo">
                  <img src="./Gmail-Logo.png" alt="twitter" style={{height:'24px'}} />
                </div>
                <p>adarshkumar20012704@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="deco1">
        <div className="box1">
          <div className="big-circle"></div>
          <div className="small-circle small1"></div>
          <div className="small-circle small2"></div>
        </div>
        <div className="box2"></div>
      </div>
      <div className="deco2">
        <div className="box1">
          <div className="big-circle"></div>
          <div className="small-circle small1"></div>
          <div className="small-circle small2"></div>
        </div>
        <div className="box2"></div>
      </div>
    </>
  )
}
