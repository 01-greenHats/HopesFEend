import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { setPosts } from '../../store/posts'
import { getPostsData } from '../../store/apiActions'
import { Link } from 'react-router-dom';

const MainPage = props => {
    console.log('posts in main page>> ',props);
 
    useEffect(async () => {
        let data = await getPostsData()
        props.setPosts(data)
    }, []);
    return (
        <>
            {/* <div className={classes.root}>
                <div style={{ display: 'flex' }}>
                    {props.inNeedUsers.map((user, idx) => {
                        // if (product.category.toLowerCase() == props.selectedCategory.toLowerCase()) {
                            console.log('>>>>>>props.user>>>>>>>', user);
                            // return (
                            //     <div key={idx} style={{ border: '1px solid black', width: 'fit-content', padding: '10px', margin: '10px' }}>
                                    
                            //             <h3 id='productName'>{product.name}</h3>
                            //             <img id='productImg' src={`${product.img}`} style={{ width: '15rem' }}></img>
                            //             <p>in stok : <strong>{product.inStock}</strong></p>
                            //             <p>price : <strong id='producPrice'>{product.price}</strong></p>
                                    
                            //             <Button onClick={() => { handleAddToCart(product) }} variant="contained" color="primary">Order</Button>
                            //             <Link to={{pathname: "/productDetails/"+product._id ,state: product  }}>View Details</Link>
                            //     </div>
                            // )
                        // }/
                    })}
                </div>
            </div> */}
        </>
    )
}
const mapStateToProps = state => (
    {
        posts: state.posts.posts,
    }
);
const mapDispatchToProps = { setPosts };
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);