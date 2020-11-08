import React,{useEffect} from 'react';
import { Redirect,useHistory  } from "react-router-dom";
import './newPostPanel.scss'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import PostAddIcon from '@material-ui/icons/PostAdd';
import CancelIcon from '@material-ui/icons/Cancel';
import { addPost } from '../../apiActions/posts';
import { connect } from 'react-redux';
import {addNewPostToStore} from '../../store/posts';
// import { checkIsLogedIn } from '../../store/auth'



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
    const history = useHistory()
    // console.log('props in new post pannel>>',props);


    async function submitPost() {
        // console.log('First = props.loggedIn : ',props.loggedIn)
        if(!props.loggedIn){
            history.push("/loginUser");
            return;
        }
        console.log('user in post props : ',props.user)

        let post = {
            content: document.getElementById('inputPost').value,
            imageUrl: [],
        }
        // console.log('NyPost : ', post)
        // console.log('token : ', props.token)
        console.log('Token in new post panel : ',props.token)
        let add_post = await addPost(post, props.token);
        console.log({ add_post }); 
        
        if(add_post.status == 200){
            props.addNewPostToStore(add_post.data)
        }
    }

    useEffect(async () => {
        // props.checkIsLogedIn()
        // console.log('First = props.loggedIn after use Effect : ',props.loggedIn)
    }, []);

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
        token: state.auth.token,
        loggedIn: state.auth.loggedIn,
        user: state.auth.user
    }
);

const mapDispatchToProps = {
    addNewPostToStore
    // checkIsLogedIn
};
export default connect(mapStateToProps, mapDispatchToProps)(NewPostPanel);