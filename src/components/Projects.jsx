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
                    <div className="project-containers">
                        <div className="project-container">
                            <div className="project-title"><h2>V-Doc (Virtual Doctor)</h2></div>
                            <div className="project-desc">
                                An AI assistant leveraging medication data to suggest appropriate treatments for various diseases and injuries, balancing efficacy with safety in its recommendations.
                            </div>
                            <div className="view-on-github"><a href='https://github.com/adarshkumar714/V-Doc' target='_blank'>view on github</a></div>
                        </div>
                        <div className="project-container">
                            <div className="project-title"><h2>COLX (College Olx)</h2></div>
                            <div className="project-desc">
                                College OLX, A versatile college platform akin to OLX, enabling trade of second-hand items, lost and found posts, and maintenance requests.
                            </div>
                            <div className="view-on-github"><a href='https://github.com/adarshkumar714/colx' target='_blank'>view on github</a></div>
                        </div>
                        <div className="project-container">
                            <div className="project-title"><h2>Discord AI Bot</h2></div>
                            <div className="project-desc">
                                A custom-trained Discord AI bot, seamlessly integrating ChatGPT with RAG, tailored to your data for enriched, contextually relevant interactions and responses.
                            </div>
                            <div className="view-on-github"><a href='https://github.com/adarshkumar714/Discord-AI-Bot' target='_blank'>view on github</a></div>
                        </div>
                        <div className="project-container">
                            <div className="project-title"><h2>Chat Room</h2></div>
                            <div className="project-desc">
                                A dynamic real-time chat app for instant messaging and seamless communication.
                            </div>
                            <div className="view-on-github"><a href='https://github.com/adarshkumar714/chat-room' target='_blank'>view on github</a></div>
                        </div>
                        <div className="project-container">
                            <div className="project-title"><h2>YouTube Ad Skipper</h2></div>
                            <div className="project-desc">
                                A Chrome extension designed to effectively bypass YouTube ads, enhancing yourvideo-watching experience without interruptions.
                            </div>
                            <div className="view-on-github"><a href='https://github.com/adarshkumar714/YT-Ad-Skipper' target='_blank'>view on github</a></div>
                        </div>
                        <div className="project-container">
                            <div className="project-title"><h2>Trash N Treasure</h2></div>
                            <div className="project-desc">
                                A web portal bridging communities and recycling industries, facilitating efficient waste management and promoting environmental sustainability.
                            </div>
                            <div className="view-on-github"><a href='https://github.com/adarshkumar714/Trash-n-Treasure' target='_blank'>view on github</a></div>
                        </div>
                        <div className="project-container">
                            <div className="project-title"><h2>TelegramGPT</h2></div>
                            <div className="project-desc">
                                An AI assistant for Telegram, utilizing the Retrieval-Augmented Generation (RAG) model, trained on custom data for enhanced, context-aware responses.
                            </div>
                            <div className="view-on-github"><a href='https://github.com/adarshkumar714/TelegramGPT' target='_blank'>view on github</a></div>
                        </div>
                        <div className="project-container">
                            <div className="project-title"><h2>Student Dashboard</h2></div>
                            <div className="project-desc">
                                A web application featuring an interactive student dashboard, designed for engaging and streamlined access to educational resources and tools.
                            </div>
                            <div className="view-on-github"><a href='https://github.com/adarshkumar714/Student-Dashboard' target='_blank'>view on github</a></div>
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
