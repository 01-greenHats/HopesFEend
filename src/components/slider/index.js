import React from 'react';
// import './test.scss'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Cover from '../../assets/cover.jpg';
import Cover3 from '../../assets/cover3.jpg';

export default function slider() {
   
    return (
        <>
            <div >
                <AwesomeSlider style ={{height:"550px"}}>
                    <div style ={{height:"550px"}} data-src={Cover} />
                    <div style ={{height:"550px"}} data-src={Cover3} />
                    <div style ={{height:"550px"}} data-src={Cover} />
                </AwesomeSlider>
            </div>
           
        </>
       
    )
}






