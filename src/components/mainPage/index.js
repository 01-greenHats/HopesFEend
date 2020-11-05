import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PostCard from '../postCard/index'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { setPosts } from '../../store/posts'
import { getPostsData, addPost } from '../../store/apiActions'
import { Link } from 'react-router-dom';

import styled from 'styled-components';



const MainPage = props => {
  console.log('posts in main page>> ', props);

  useEffect(async () => {
    let data = await getPostsData()
    props.setPosts(data)

    let add_post = await addPost()
    console.log({ add_post });
  }, []);
  return (
    <>
    <h1>hello</h1>
     <PostCard />
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