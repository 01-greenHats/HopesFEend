import React, { useEffect, useState } from 'react';
import { TextField, Button, CardActionArea } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Card } from 'react-bootstrap'
import './userCard.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteFromDonorFavList } from '../../apiActions/donors';

function UserCardFav(props) {

    const [nameFilter, setNameFilter] = useState('All');
    const [nationalIdFilter, setNationalIdFilter] = useState('All');
    const [currentUser, setCurrentUser] = useState('');

    console.log('props : ', props);
    function getLogoText(str) {
        var result = '';
        str.split(' ').forEach(word => {
            result = result + word[0];
        });
        return result;
    }

    async function handleDeleteFromFavList(token,userId){
        let deleteFromFavResult=await deleteFromDonorFavList(token,userId);
        console.log('deleteFromFavResult>>>',deleteFromFavResult);

    }



    useEffect(() => {
        // Update the document title using the browser API
    });

  
    return (
        <>
           
            <div className="userCardContainer">
                {
                    props.data.map((item, idx) => {
                        return (
                            <>
                                <div className="background"></div>

                                <div className="outer-div">
                                    <div className="inner-div">
                                        <div className="front">
                                            <div className="front__bkg-photo"></div>
                                            <div className="front__face-photo">
                                                <div className="front_face-text">{getLogoText(item.name)}</div>
                                            </div>
                                            <div className="front__text">
                                                <h3 className="front__text-header"> {item.name}</h3>


                                                <p className="front__text-para"><LocationOnIcon className="front-icons" />Gaza</p>


                                                <span className="front__text-hover">Total Payments 0 $</span>
                                            </div>
                                        </div>
                                        <div className="back">
                                            <div className="social-media-wrapper">



                                                <div className="card__details">
                                                    <ul>
                                                        <li>Date of Bith: {item.dob}</li>
                                                        <li>Social Status: {item.socialStatus}</li>
                                                        <li>Health Status: {item.healthStatus}</li>
                                                        <li>Family Count: {item.familyCount}</li>
                                                        <li>Income: {item.income} </li>
                                                        <li>Expencsies: {item.expencsies}</li>
                                                        <li>Email: {item.email}</li>
                                                        <button className="viewMoreButton"><Link to={{ pathname: "/user_payments/" + item._id, state: item }}>Donate for this person</Link> </button>
                                                        <button onClick={()=>{handleDeleteFromFavList(props.token,item._id)}} className="viewMoreButton"> Delete From Favourite </button>

                                                        {/* <button className="viewMoreButton"><Link to={{ pathname: "/user_payments/" + item._id, state: item }}>View Payments history</Link> </button> */}

                                                        {/* <button onClick={() => {
                                                            //setCurrentUser({item},handleDonate())
                                                            handleDonate(item);
                                                        }} className="viewMoreButton">Donate</button> */}







                                                    </ul>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </>
                        );
                    })
                }
            </div>
        </>
    )
}

//        token: state.token.token,

const mapStateToProps = state => (
    {
        token: state.auth.token,
        loggedIn: state.auth.loggedIn
    });
const mapDispatchToProps = {
  
};
export default connect(mapStateToProps, mapDispatchToProps)(UserCardFav);
