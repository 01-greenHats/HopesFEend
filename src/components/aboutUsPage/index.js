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
                <div class="wrapper">
                    <div class="container">
                        <div class="top-shela"></div>
                        <div class="bottom">
                            <div class="left">

                                <h2>Ahmad Shela</h2>
                                <p>Software Developer</p>

                            </div>
                        </div>
                    </div>
                    <div class="inside">
                        <div class="icon"><i class="material-icons">info</i></div>
                        <div class="contents">
                            <p>
                                Software Developer
                        </p>
                        </div>
                    </div>
                </div>


                <div class="wrapper">
                    <div class="container">
                        <div class="top-herthani"></div>
                        <div class="bottom">
                            <div class="left">

                                <h2>Ahmad Herthani</h2>
                                <p>Software Developer</p>

                            </div>
                        </div>
                    </div>
                    <div class="inside">
                        <div class="icon"><i class="material-icons">info</i></div>
                        <div class="contents">
                            <p>
                                Software Developer
                        </p>
                        </div>
                    </div>
                </div>


                <div class="wrapper">
                    <div class="container">
                        <div class="top-roqaia"></div>
                        <div class="bottom">
                            <div class="left">

                                <h2>Roqaia Salahi</h2>
                                <p>Software Developer</p>

                            </div>

                        </div>
                    </div>
                    <div class="inside">
                        <div class="icon"><i class="material-icons">info</i></div>
                        <div class="contents">
                            <p>
                                Software Developer
                        </p>
                        </div>
                    </div>
                </div>


                <div class="wrapper">
                    <div class="container">
                        <div class="top-hisham"></div>
                        <div class="bottom">
                            <div class="left">
                                <h2>Hisham AlNaji</h2>
                                <p>Software Developer</p>
                            </div>
                        </div>
                    </div>
                    <div class="inside">
                        <div class="icon"><i class="material-icons">info</i></div>
                        <div class="contents">
                            <p>
                                Software Developer
                        </p>
                        </div>
                    </div>
                </div>
            </div>






        </>
    )
}
