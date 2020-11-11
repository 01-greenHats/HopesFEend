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
          <section id="bigImage">
    <h2><Typical
                    className="about-para"
                    steps={['We make', 1000, 'We make a living by what we get, but we make a life by what we give..', 700]}

                    loop={Infinity}
                    wrapper="p"
                /> </h2>
  </section>

  <section >
    <h1 class="our-mission">
    {/* <Typical
                    // className="about-para"
                    steps={['We make', 1000, 'We make a living by what we get, but we make a life by what we give..', 700]}

                    loop={Infinity}
                    wrapper="p"
                />  */}
    </h1>
    <div class="title-border">
      <span class="line-under"></span>
      <span class="circle-under"></span>
      <span class="line-under"></span>
    </div>
    {/* <p>
     We make a living by what we get, but we make a life by what we give..
    </p> */}
  </section>
            {/* <Slider />
            <div className="about-section">

                <h1 className="about">ABOUT HOPES</h1>
                <Typical
                    className="about-para"
                    steps={['Together', 1000, 'Together We Can Make a Difference', 700]}

                    loop={Infinity}
                    wrapper="p"
                /> */}
                {/* <p className="about-para">Together We Can Make a Difference </p> */}
                {/* <p className="about-para">We are here to link you with the people in need..<br /> Take your first step in making the world a better place and start helping others.. </p>
            </div> */}

            <h1 className="about" style={{ textAlign: "center" }}>Our Team</h1>
            <div className="row-about">
                <div className="wrapper-about">
                    <div className="container">
                        <div className="top-shela"></div>
                        <div className="bottom">
                            <div className="left">

                                <h2 className="h2-about">Ahmad Shela</h2>
                                <p className="p-about">Software Developer</p>

                            </div>
                        </div>
                    </div>
                    <div className="inside">
                        <div className="icon"><i className="material-icons">info</i></div>
                        <div className="contents">
                            <p className="p-about">
                                Team leader
                        </p>
                            <p className="p-about">
                                Bsc of computer science
                        </p>
                            <p className="p-desc">
                                I studied bachelor of computer applications at Amity Online University.

                        </p>
                            <p className="p-desc">

                                coding is my passion and I love solving problems

                        </p>
                            <p className="p-desc">

                                I am learning and will keep learning

                        </p>
                        </div>
                    </div>
                </div>


                <div className="wrapper-about">
                    <div className="container">
                        <div className="top-herthani"></div>
                        <div className="bottom">
                            <div className="left">

                                <h2 className="h2-about">Ahmad Herthani</h2>
                                <p className="p-about">Software Developer</p>

                            </div>
                        </div>
                    </div>
                    <div className="inside">
                        <div className="icon"><i className="material-icons">info</i></div>
                        <div className="contents">
                            <p className="p-desc">
                                Bsc of Information Technology.
                        </p>
                            <p className="p-desc">
                                Master student of Information Technology.
                        </p>
                            <p className="p-desc">

                                Teacher assistance and project manger.

                        </p>
                            <p className="p-desc">

                                Good experience in data stewardship.
                        </p>
                            <p className="p-desc">

                                I love coding and problem solving.
                        </p>
                        </div>
                    </div>
                </div>


                <div className="wrapper-about">
                    <div className="container">
                        <div className="top-roqaia"></div>
                        <div className="bottom">
                            <div className="left">

                                <h2 className="h2-about">Roqaia Salahi</h2>
                                <p className="p-about">Software Developer</p>

                            </div>

                        </div>
                    </div>
                    <div className="inside">
                        <div className="icon"><i className="material-icons">info</i></div>
                        <div className="contents">
                            <p className="p-about">
                                Full-stack developer
                        </p>
                            <p className="p-desc">
                                I have a civil engineering background so building strong entities is my little game

                        </p>
                            <p className="p-desc">

                                I love coding and Algorithms

                        </p>
                            <p className="p-desc">
                                Looking forward  to build some more strong and stable softwares.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="wrapper-about">
                    <div className="container">
                        <div className="top-hisham"></div>
                        <div className="bottom">
                            <div className="left">
                                <h2 className="h2-about">Hisham AlNaji</h2>
                                <p className="p-about">Software Developer</p>
                            </div>
                        </div>
                    </div>
                    <div className="inside">
                        <div className="icon"><i className="material-icons">info</i></div>
                        <div className="contents">
                            <p className="p-about">
                                Software Developer
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
