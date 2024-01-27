import { React, useEffect } from 'react'
import './Projects.css'

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
                    <div className="containers">
                        <div className="container">
                            <div className="project-title"><h2>Project Title</h2></div>
                            <div className="project-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, eum. Repudiandae eaque consequuntur consequatur assumenda. Necessitatibus dolorem quae architecto inventore rem assumenda quis! Officiis maiores molestiae fugit quia sunt quos rerum beatae consectetur deleniti expedita porro, aperiam tenetur inventore cumque doloremque. Incidunt facere suscipit voluptatem sint quas assumenda accusamus recusandae.
                            </div>
                            <div className="view-on-github"><a>view on github</a></div>
                        </div>
                        <div className="container">
                            <div className="project-title"><h2>Project Title</h2></div>
                            <div className="project-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, eum. Repudiandae eaque consequuntur consequatur assumenda. Necessitatibus dolorem quae architecto inventore rem assumenda quis! Officiis maiores molestiae fugit quia sunt quos rerum beatae consectetur deleniti expedita porro, aperiam tenetur inventore cumque doloremque. Incidunt facere suscipit voluptatem sint quas assumenda accusamus recusandae.
                            </div>
                            <div className="view-on-github"><a>view on github</a></div>
                        </div>
                        <div className="container">
                            <div className="project-title"><h2>Project Title</h2></div>
                            <div className="project-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, eum. Repudiandae eaque consequuntur consequatur assumenda. Necessitatibus dolorem quae architecto inventore rem assumenda quis! Officiis maiores molestiae fugit quia sunt quos rerum beatae consectetur deleniti expedita porro, aperiam tenetur inventore cumque doloremque. Incidunt facere suscipit voluptatem sint quas assumenda accusamus recusandae.
                            </div>
                            <div className="view-on-github"><a>view on github</a></div>
                        </div>
                        <div className="container">
                            <div className="project-title"><h2>Project Title</h2></div>
                            <div className="project-desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, eum. Repudiandae eaque consequuntur consequatur assumenda. Necessitatibus dolorem quae architecto inventore rem assumenda quis! Officiis maiores molestiae fugit quia sunt quos rerum beatae consectetur deleniti expedita porro, aperiam tenetur inventore cumque doloremque. Incidunt facere suscipit voluptatem sint quas assumenda accusamus recusandae.
                            </div>
                            <div className="view-on-github"><a>view on github</a></div>
                        </div>
                    </div>
                {/* <div className="section sec1"></div>    
                <div className="section mainSec" >
                </div>
                <div className="section sec3"></div> */}
            </div>
        </>
    )
}
