import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PostCard from '../postCard/index'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { setPosts } from '../../store/posts'
import { getInNeedUsersData,getPostsData, addPost, inNeedUserSignup ,addComment} from '../../store/apiActions'
import { Link } from 'react-router-dom';
import NewPostPanel from '../newPostPanel'
// import PostCard from '../postCard'

import styled from 'styled-components';



const MainPage = props => {

    console.log('posts in main page>> ', props);

    useEffect(async () => {   

        let posts = await getPostsData()
        console.log('posts>>',posts);
        props.setPosts(posts.data)
        // //Handle Signup
        // //This function should take its value from signup form
        let user =  {
            "name": "Ahmad Alhrthani Hooks1",
            "password": "12345",
            "email": "user@11",
            "nationalNo": 9015661231,
            "payPal": "palpalyAccount",
            "dob": "2020-01-01T22:00:00.000Z",
            "familyCount": 3,
            "socialStatus": "married",
            "income": 1000,
            "healthStatus": "good",
            "healthDesc": "good",
            "expencsies": 400
        };
        let receivedToken = await inNeedUserSignup(user);
        console.log('received token after signup>> ', receivedToken);

        // //Handle add post
        // //this token must come from cookie
        let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoic3RhdGljIHJlYWN0IHVzZXI1IiwibmF0aW9uYWxObyI6OTAxNTY2MTIzMSwiaWF0IjoxNjA0NTYyMTkwLCJleHAiOjE2MDQ1NjY2OTB9.ba2Jbkz2gE9xFe7z764T9ScSiG-qHzcKNPnvLi73Q4w';
        //this post must come from add post form
        let post =    {
            "userid": "testttt",
            "title": "post using hooks",
            "content": "new",
            "imageUrl": "image.jpg",
        }
        // let add_post = await addPost(post,token);
        // console.log({ add_post });

        // //Handle add comment
        // //this comment should come from comment input text
        let comment={"content":"This my comment"};
        // //post id should comr from the post the user is trying
        // //to comment on it
        let postId="5f7ebd392b0fb300173a55b6";  
        console.log('post id>>',postId);  

        let add_comment = await addComment(comment,token,postId);
        console.log({ add_comment });
    }, []);
    return (
        <>
        <NewPostPanel/>
        <PostCard/>
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