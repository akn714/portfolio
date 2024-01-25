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
                <div className="section sec1"></div>
                <div className="section mainSec" >
                    <div className="containers">
                        <div className="container"></div>
                        <div className="container"></div>
                        <div className="container"></div>
                        <div className="container"></div>
                    </div>
                </div>
                <div className="section sec3"></div>
            </div>
        </>
    )
}
