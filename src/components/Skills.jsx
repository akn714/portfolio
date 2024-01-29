import { React, useEffect } from 'react'
import './Skills.css'

export default function Main() {
    let all_containers = document.querySelector('.containers');
    // let containers = document.querySelectorAll('.container');
    // let total_containers = containers.length;
    // let current = 0;
    console.log('asdf')
    // all_containers.style.left = '150%';
    // function moveLeft(){
    //     if(current!=total_containers){
    //         current++;
    //         all_containers.style.left += '55';
    //     }
    //     all_containers.style.left += '55';  
    // }

    return (
        <>

            <div className="main">
                <div className="skill-containers">
                    <div className="skill-container">
                        <div className="skill-title">
                            <h2>Languages</h2>
                        </div>
                        <div className="skill-icons">
                            <div className="skill-logo">
                                <img src="./skills-icons/python.png" alt="python" />
                                {/* <p className="skill-name">Python</p> */}
                            </div>
                            <div className="skill-logo">
                                <img src="./skills-icons/html.png" alt="html" />
                                {/* <p className="skill-name">HTML</p> */}
                            </div>
                            <div className="skill-logo">
                                <img src="./skills-icons/css.png" alt="css" />
                                {/* <p className="skill-name">CSS</p> */}
                            </div>
                            <div className="skill-logo">
                                <img src="./skills-icons/javascript.png" alt="js" />
                                {/* <p className="skill-name">Javascript</p> */}
                            </div>
                            <div className="skill-logo">
                                <img src="./skills-icons/java.png" alt="java" />
                                {/* <p className="skill-name">Java</p> */}
                            </div>
                            <div className="skill-logo">
                                <img src="./skills-icons/c.png" alt="c" />
                                {/* <p className="skill-name">C</p> */}
                            </div>
                            <div className="skill-logo">
                                <img src="./skills-icons/cpp.png" alt="c++" />
                                {/* <p className="skill-name">C++</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="skill-container">
                        <div className="skill-title">
                            <h2>Libraries / Frameworks</h2>
                        </div>
                        <div className="skill-icons">
                            <div className="skill-logo">
                                <img src="./skills-icons/flask.png" alt="flask" />
                                {/* <p className="skill-name">Python</p> */}
                            </div>
                            <div className="skill-logo">
                                <img src="./skills-icons/nodejs.png" alt="node.js" />
                                {/* <p className="skill-name">Python</p> */}
                            </div>
                            <div className="skill-logo">
                                <img src="./skills-icons/socket.png" alt="socket.io" />
                                {/* <p className="skill-name">Python</p> */}
                            </div>
                            <div className="skill-logo">
                                <img src="./skills-icons/express.png" alt="express.js" />
                                {/* <p className="skill-name">Python</p> */}
                            </div>
                            <div className="skill-logo">
                                <img src="./skills-icons/mongodb.png" alt="mongoDB" />
                                {/* <p className="skill-name">Python</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="skill-container">
                        <div className="skill-title">
                            <h2>Tools</h2>
                        </div>
                        <div className="skill-icons">
                            <div className="skill-logo">
                                <img src="./skills-icons/linux.png" alt="linux" />
                                {/* <p className="skill-name">Python</p> */}
                            </div>
                            <div className="skill-logo">
                                <img src="./skills-icons/git.png" alt="git" />
                                {/* <p className="skill-name">Python</p> */}
                            </div>
                            <div className="skill-logo">
                                <img src="./skills-icons/github.png" alt="github" />
                                {/* <p className="skill-name">Python</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div classNameName="section sec1"></div>    
                <div classNameName="section mainSec" >
                </div>
                <div classNameName="section sec3"></div> */}
            </div>
        </>
    )
}
