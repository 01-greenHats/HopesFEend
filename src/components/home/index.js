import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import './home.scss';
import Typical from 'react-typical';
import { Link } from "react-router-dom";
import Slider from '../slider'

function Test() {

    return (
        <>
 <Slider />
{/* <header class="header">
	<div class="wrapper">
		<div class="heading-wrapper">
			<h1 class="main-heading"> <Typical
                 className="home-cover-para"
                 steps={['We', 1000, 'We make a living by what we get, but we make a life by what we give..', 700]}

                loop={Infinity}
              wrapper="p"
           /></h1>
		</div>
 		<div class="more-info">
			<i class="fa fa-arrow-down" aria-hidden="true"></i>
		</div> 
        <Button className="donateBtn" variant="secondary">  <Link to='/in_need_users' id ="a-homeBtn">Donate</Link> </Button>
	</div>
</header>
<main></main>
<footer></footer> */}

          
        </>
    )
}


export default Test;




