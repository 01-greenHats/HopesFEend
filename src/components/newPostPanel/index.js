import React from 'react';
import './newPostPanel.scss'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import PostAddIcon from '@material-ui/icons/PostAdd';
import CancelIcon from '@material-ui/icons/Cancel';
import { addPost } from '../../apiActions/posts';
import { connect } from 'react-redux';



function toggleControlePanel(e) {
    if (document.getElementById('ControlPanel').style.display == 'none') {
        document.getElementById('ControlPanel').style.display = 'block';
        document.getElementById('inputPost').style.height = '50px';
    } else {
        console.log('HHHHH');
        document.getElementById('ControlPanel').style.display = 'none';
        document.getElementById('inputPost').style.height = '30px';
    }
}



function NewPostPanel(props) {
    console.log('props in new post pannel>>',props);


    async function submitPost() {
        // //this token must come from cookie
        //let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWhtYWQgU2hlbGEiLCJuYXRpb25hbE5vIjo5MDE1NjYxMjMxLCJpYXQiOjE2MDQ1Njg0NDQsImV4cCI6MTYwNDU3Mjk0NH0.bxyOJAardYGftY2LHbJyGHoh9yMwof17Yx95xulPLwo"
        //this post must come from add post form
        let post = {
            "userid": "testttt",
            "title": "post using hooks",
            "content": document.getElementById('inputPost').value,
            "imageUrl": "image.jpg",
        }
        console.log('NyPost : ', post)
        console.log('token : ', props.token)
    
    
        let add_post = await addPost(post, props.token);
        console.log({ add_post });
    }

    return (
        <>
            <div className="newPostContainer" style={{ border: "1px solid gray" }}>
                <div className="newPostPanelContainer">
                    <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Avatar" style={{ width: "60px", borderRadius: "50%", padding: "10px" }} />
                    <div className="postInputContainer">
                        <textarea id="inputPost" placeholder="Help others" className="postInput" onClick={(e) => { toggleControlePanel(e) }} name="Text1" cols="40" rows="5"></textarea>
                        {/* <input placeholder="Help others" className="postInput" onClick={()=>{toggleControlePanel()}}/> */}
                    </div>
                </div>
                <div id="ControlPanel" className="newPostControlPanel" style={{ display: "none", position: "relative" }}>
                    <hr />
                    <button className="btnPostControle" style={{ position: "relative" }}><CameraAltIcon /></button>
                    <button className="btnPostControle" style={{ position: "relative", left: "55%" }} onClick={(e) => { toggleControlePanel(e) }}><CancelIcon /></button>
                    <button className="btnPostControle" style={{ position: "relative", left: "55%" }} onClick={() => { submitPost() }}><PostAddIcon /></button>
                </div>
            </div>
        </>
    )


}


const mapStateToProps = state => (
    {
        posts: state.posts.posts,
        token: state.token.token,
    }
);
export default connect(mapStateToProps)(NewPostPanel);