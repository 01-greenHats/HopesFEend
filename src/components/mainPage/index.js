import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import { Redirect } from "react-router-dom";
import cookie from 'react-cookies';
import PostCard from '../postCard/index'
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import {setPosts} from '../../store/posts';
import {setToken} from '../../store/token';
import { checkIsLogedIn } from '../../store/auth'

import {
    getPosts,
    addPost,
    deletePost,
    editPost,
    addComment,
    deleteComment,
    editComment
} from '../../apiActions/posts';
import {inNeedUserSignup} from '../../apiActions/users'
import {Link} from 'react-router-dom';
import NewPostPanel from '../newPostPanel'
// import PostCard from '../postCard'

import styled from 'styled-components';


const MainPage = props => {

    // console.log('posts in main page>> ', props);
    // props.setToken('receivedToken');
    // console.log('token in main page>> ', props.token);


    useEffect(async () => {
        let posts = await getPosts()
        props.setPosts(posts.data)
        props.checkIsLogedIn()
    }, []);

    return (
        <>
            <div>
                        <NewPostPanel/>
                        <div>{
                            props.posts.map((post, idex) => {
                                return (
                                    <PostCard key={idex}
                                        post={post}/>
                                );
                            })
                        } 
                        </div>
             </div>
        </>
    )

}


const mapStateToProps = state => (
    {
    posts: state.posts.posts, 
    token: state.token.token, 
    loggedIn: state.auth.loggedIn
});
const mapDispatchToProps = {
    setPosts,
    setToken,
    checkIsLogedIn
};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
