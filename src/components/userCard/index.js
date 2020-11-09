import React, { useEffect, useState } from 'react';
import { TextField, Button, CardActionArea } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Card } from 'react-bootstrap'
import './userCard.scss';
import { Link } from 'react-router-dom';
import { createNewPayment } from '../../apiActions/payments';



function UserCard(props) {

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
    function handleDonate(user) {
        console.log('handleDonate called');
        // console.log('currentUser>> ',currentUser);
        // createNewPayment();
        console.log('123>>>', user.name);
        let paymentData = {};
        paymentData.email = user.email;
        paymentData._id = user._id;
        paymentData.amoount = 50;
        console.log('payment data>>', paymentData);
        let paymentProcessResult = createNewPayment(paymentData);
        console.log('paymentProcessResult>>', paymentProcessResult);


    }

    useEffect(() => {
        // Update the document title using the browser API
    });



    // function handleDonate1() {
    //     console.log('handleDonate1 called');
    //     // createNewPayment();
    // }

    function filterData(data) {
        let result = [];
        data.forEach(item => {
            // double filteration
            if (nameFilter !== 'All' && nationalIdFilter !== 'All') {
                if (item.name == nameFilter && item.nationalNo.toString() == nationalIdFilter) {
                    result.push(item)
                }
            } else if (nameFilter !== 'All' && item.name == nameFilter) {
                result.push(item)
            } else if (nationalIdFilter !== 'All' && item.nationalNo.toString() == nationalIdFilter) {
                result.push(item)
            }
        });
        return result.length == 0 ? data : result;
    }
    return (
        <>
            <div className="filterSearchPanel">

                {/* <TextField id="standard-secondary" className="searchInput" onChange={(e) => { setNationalIdFilter(e.target.value) }} label="National Number" />
                <TextField id="standard-secondary" className="searchInput" onChange={(e) => { setNameFilter(e.target.value) }} label="Name" /> */}
                <form className="serchForm">

                    <label className="searchLabel">
                        <input id="standard-secondary" className="searchInput" placeholder="National Number" onChange={(e) => { setNationalIdFilter(e.target.value) }} label="National Number" />
                    </label>
                    <label>
                        <input id="standard-secondary" className="searchInput" placeholder="Name" onChange={(e) => { setNameFilter(e.target.value) }} label="Name" />
                    </label>

                </form>
            </div>
            <div className="userCardContainer">
                {
                    filterData(props.data).map((item, idx) => {
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
export default UserCard;
// const mapStateToProps = state => (
//     {products: state.products.products,
//         }
// );
// const mapDispatchToProps = {addToCart, setProducts, updateInStock};
// export default connect(mapStateToProps, mapDispatchToProps)(ProductDtl);