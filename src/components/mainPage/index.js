import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { setPosts } from '../../store/posts'
import { getPostsData, addPost } from '../../store/apiActions'
import { Link } from 'react-router-dom';

import styled from 'styled-components';

// import { CloseIcon } from 'components/icons';
// import CreateComment from 'components/CreateComment';


// import PostPopupInfo from './PostPopupInfo';
// import PostPopupComments from './PostPopupComments';
// import PostPopupOptions from './PostPopupOptions';

import { Helmet } from 'react-helmet';


const Root = styled.div`
  margin: 0 auto;
  margin: ${(p) => !p.usedInModal && p.theme.spacing.lg} 0;
  box-shadow: ${(p) => p.theme.shadows.sm};
  border-radius: ${(p) => p.theme.radius.sm};
  z-index: ${(p) => (p.usedInModal ? p.theme.zIndex.xl : 'inherit')};
  overflow: hidden;
  width: 100%;
  @media (min-width: ${(p) => p.theme.screen.md}) {
    width: auto;
  }
`;


const Spacing = styled.div`
  ${(p) => p.top && `margin-top: ${p.theme.spacing[p.top]}`};
  ${(p) => p.right && `margin-right: ${p.theme.spacing[p.right]}`};
  ${(p) => p.bottom && `margin-bottom: ${p.theme.spacing[p.bottom]}`};
  ${(p) => p.left && `margin-left: ${p.theme.spacing[p.left]}`};
  ${(p) => p.inline && `display: inline-block;`}
  @media (max-width: ${(p) => p.theme.screen.sm}) {
    ${(p) =>
        p.hideOnSm &&
        `
      display: none;
    `}
  }
`;

const Container = styled.div`
  max-height: ${(p) => (p.usedInModal ? '600px' : 'auto')};
  overflow-y: ${(p) => (p.usedInModal ? 'auto' : 'inherit')};
  max-width: 1300px;
  background-color: ${(p) => p.theme.colors.white};
  display: flex;
  flex-direction: column;
  @media (min-width: ${(p) => p.theme.screen.md}) {
    flex-direction: ${(p) => (p.usedInModal ? 'row' : 'column')};
    max-height: ${(p) => (p.usedInModal ? '600px' : 'auto')};
    overflow-y: inherit;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(p) => (p.usedInModal ? 'center' : 'flex-start')};
  justify-content: center;
  background-color: ${(p) => p.theme.colors.black};
  width: 100%;
  @media (min-width: ${(p) => p.theme.screen.md}) {
    max-width: 1000px;
    min-width: 500px;
    height: ${(p) => (p.usedInModal ? '600px' : 'auto')};
  }
`;

const Image = styled.img`
  display: block;
  max-width: 100%;
  width: ${(p) => !p.usedInModal && '100%'};
  max-height: ${(p) => (p.usedInModal ? '600px' : '100%')};
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
  background-color: ${(p) => p.theme.colors.white};
  @media (min-width: ${(p) => p.theme.screen.md}) {
    width: ${(p) => (p.usedInModal ? '360px' : '100%')};
    min-width: 360px;
  }
`;

const CloseModal = styled.div`
  display: block;
  position: fixed;
  right: 20px;
  top: 15px;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: ${(p) => p.theme.font.size.xs};
  border-bottom: 1px solid ${(p) => p.theme.colors.border.light};
  padding: ${(p) => p.theme.spacing.xs};
`;



const MainPage = props => {
    console.log('posts in main page>> ', props);

    useEffect(async () => {
        let data = await getPostsData()
        props.setPosts(data)

        let add_post=await addPost()
        console.log({add_post});
    }, []);
    return (
        <>
            {props.posts.map((post, idx) => {
                console.log("add post", post)
            })}
            <Root usedInModal={usedInModal}>

                <Helmet>
                    <title>{post.title ? post.title : `${post.userid}'s post`}</title>
                </Helmet>
                {/* <Helmet title={post.title ? post.title : `${post.userid}'s post`} /> */}

                {closeModal && (
                    <CloseModal onClick={closeModal}>
                        <CloseIcon width="16" color="white" />
                        <p width="16" color="white" />
                    </CloseModal>
                )}

                <Container usedInModal={usedInModal}>
                    <Left usedInModal={usedInModal}>
                        <Image src={post.imageUrl} usedInModal={usedInModal} />
                    </Left>

                    <Right usedInModal={usedInModal}>
                        <Spacing>
                            {/* <PostPopupInfo author={post.userid} /> */}
                            < p author={post.userid} />

                            {post.title && <Title>{post.title}</Title>}

                            {/* <PostPopupComments
                                usedInModal={usedInModal}
                                comments={post.comments}
                                postId={post._id}
                                postAuthor={post.userid}
                            /> */}
                            <p
                                usedInModal={usedInModal}
                                comments={post.comments}
                                postId={post._id}
                                postAuthor={post.userid}
                            />
                        </Spacing>

                        <Spacing>
                            {/* <PostPopupOptions postId={post._id} postAuthor={post.userid} postLikes={post.likes} /> */}
                            <p postId={post._id} postAuthor={post.userid} postLikes={post.likes} />

                            {/* <CreateComment post={post} /> */}
                        </Spacing>
                    </Right>
                </Container>
            </Root>
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