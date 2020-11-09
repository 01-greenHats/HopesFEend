import React from 'react';
import Slider from '../slider'
import './about.scss'
import Typical from 'react-typical'

import Ahmad1 from '../../assets/ahmad1.jpg'
import Ahmad2 from '../../assets/ahmad2.jpg'
import Roqaia from '../../assets/roqaia.jpg'
import Hisham from '../../assets/hisham.jpg'






export default function About() {

    return (
        <>
            <Slider />
            <div class="about-section">
          
                <h1 class="about">ABOUT HOPES</h1>
                <Typical
                className="about-para"
                    steps={['Together', 1000, 'Together We Can Make a Difference', 700]}
                    
                    loop={Infinity}
                    wrapper="p"
                />
                {/* <p class="about-para">Together We Can Make a Difference </p> */}
                <p class="about-para">We are here to link you with the people in need..<br /> Take your first step in making the world a better place and start helping others.. </p>
            </div>

            <h1 class="about" style={{ textAlign: "center" }}>Our Team</h1>
            <div class="row-about">
                <div class="column">
                    <div class="about-card">
                        <img src={Ahmad1} alt="Jane" style={{ width: "100%" }} />
                        <div class="about-card-container">
                            <h2 class="team-names">Ahmad Alhrthani </h2>
                            <p class="about-card-title">placeholder</p>
                            <p class="about-card-para" >add short bio here lorem ipsum ipsum lorem.</p>
                            <p>ahmad@example.com</p>
                            <p><button class="about-card-button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">


                    <div class="about-card">
                        <img src={Roqaia} alt="Mike" style={{ width: "100%" }} />
                        <div class="about-card-container">
                            <h2 class="team-names">Roukia Salahi</h2>
                            <p class="about-card-title">placeholder</p>
                            <p class="about-card-para">add short bio here lorem ipsum ipsum lorem.</p>
                            <p>roqaia@example.com</p>
                            <p><button class="about-card-button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="about-card">
                        <img src={Ahmad2} alt="John" style={{ width: "100%" }} />
                        <div class="about-card-container">
                            <h2 class="team-names">Ahmad Shela</h2>
                            <p class="about-card-title">placeholder</p>
                            <p class="about-card-para">add short bio here lorem ipsum ipsum lorem.</p>
                            <p>ahmad@example.com</p>
                            <p><button class="about-card-button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="about-card">
                        <img src={Hisham} alt="John" style={{ width: "100%" }} />
                        <div class="about-card-container">
                            <h2 class="team-names">Hisham AlNaji</h2>
                            <p class="about-card-title">placeholder</p>
                            <p class="about-card-para">add short bio here lorem ipsum ipsum lorem.</p>
                            <p>hisham@example.com</p>
                            <p><button class="about-card-button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}
