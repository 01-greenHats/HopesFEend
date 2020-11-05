import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setPosts } from '../../store/posts'
import { getPostsData, addPost } from '../../store/apiActions'
import { Card, Image, Button, InputGroup, FormControl, Col } from 'react-bootstrap'
import FacebookProvider, { Like,Comments } from 'react-facebook';

import { FormatAlignCenter } from '@material-ui/icons';

import './postCard.scss'

const postCard = props => {
    console.log('posts in main page>> ', props);

    useEffect(async () => {
        let data = await getPostsData()
        props.setPosts(data)

        let add_post = await addPost()
        console.log({ add_post });
    }, []);
    return (
        <>
            <h1>hii</h1>
            {props.posts.map((post, idx) => {
                // console.log("add post", post)
                return (

                    <Card className="text-center">
                        <Card.Header><div className="name">
                            <Col xs={6} md={4}>
                                <Image src={post.imageUrl} roundedCircle />  </Col>
                            <span>{post.userid}<br />{post.createdTime}</span>
                        </div></Card.Header>
                        <Card.Body>

                            <Card.Text>
                                <div id="content">
                                    {post.content}
                                </div>
                            </Card.Text>
                            <div>
                                {/* // action increse no of likes  */}
                                <FacebookProvider appId="123456789">
                                    <Like href="http://www.facebook.com" colorScheme="dark" showFaces share />
                                </FacebookProvider>

                                <FacebookProvider appId="123456789">
                                    <Comments href="http://www.facebook.com" />
                                </FacebookProvider>
                            </div>

                            {/* // action add a comment  */}
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Add a comment.."
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary">Post</Button>
                                </InputGroup.Append>
                            </InputGroup>

                        </Card.Body>

                    </Card>
                )

            })}
        </>
    )
}


const mapStateToProps = state => (
    {
        posts: state.posts.posts,
    }
);
const mapDispatchToProps = { setPosts };
export default connect(mapStateToProps, mapDispatchToProps)(postCard);
// export default postCard;