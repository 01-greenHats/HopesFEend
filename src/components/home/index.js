import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import './home.scss';
import Typical from 'react-typical';
import { Link } from "react-router-dom";


function Test() {

    return (
        <>

            <header class="header">
                <div class="home-wrapper">
                    <div class="heading-wrapper">
                        <h1 class="main-heading">HOPES
                              <Typical
                                className="home-cover-para"
                                steps={['We make', 1000, 'We make a living by what we get, but we make a life by what we give', 700]}

                                loop={Infinity}
                                wrapper="p"
                            />
                        </h1>
                    </div>
                    {/* <Button className="donateBtn" variant="secondary"><Link to='/in_need_users'>DONATE </Link></Button> */}
                    <Button className="donateBtn" variant="secondary">  <Link to='/in_need_users' id ="a-homeBtn">Donate</Link> </Button>

                </div>
            </header>
            <main>
            </main>

          
        </>
    )
}


export default Test;




