import React, { useEffect } from 'react';
import { Redirect, useHistory } from "react-router-dom";
import './newPostPanel.scss'
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import PostAddIcon from '@material-ui/icons/PostAdd';
import CancelIcon from '@material-ui/icons/Cancel';
import { addPost } from '../../apiActions/posts';
import { connect } from 'react-redux';
import { addNewPostToStore } from '../../store/posts';
import CloseIcon from '@material-ui/icons/Close';
// import { checkIsLogedIn } from '../../store/auth'



function toggleControlePanel(e) {
    if (document.getElementById('ControlPanel').style.display == 'none') {
        document.getElementById('ControlPanel').style.display = 'block';
        // document.getElementById('inputPost').style.height = '100px';
    } else {
        console.log('HHHHH');
        document.getElementById('ControlPanel').style.display = 'none';
        // document.getElementById('inputPost').style.height = '40px';
    }
}



function NewPostPanel(props) {
    const history = useHistory()
    // console.log('props in new post pannel>>',props);


    async function submitPost() {
        console.log('user who added the post : ', props.user)
        if (!props.loggedIn) {
            history.push("/userForm");
            return;
        }
        console.log('user in post props : ', props.user)

        let post = {
            content: document.getElementById('inputPost').value,
            imageUrl: [],
        }
        // console.log('NyPost : ', post)
        // console.log('token : ', props.token)
        console.log('Token in new post panel : ', props.token)
        let add_post = await addPost(post, props.token);
        if (add_post.status == 200) {
            let id = add_post.data.author;
            add_post.data.author = props.user
            console.log('Added Post : ', add_post.data);
            props.addNewPostToStore(add_post.data)
        }
        document.getElementById('inputPost').value = ""
    }

    useEffect(async () => {
        // props.checkIsLogedIn()
        // console.log('First = props.loggedIn after use Effect : ',props.loggedIn)
    }, []);

    return (
        <>

            {/* <div class="row-com">
<div class="avatar_comment col-md-1">
    <img src="https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg" alt="avatar" />
</div>
<div class="box_comment col-md-11">
    <form onSubmit={(e) => { handleAddComment(e, props.post._id) }}>

        <textarea name="commentContent" class="commentar" placeholder="Add a comment..."></textarea>

        <div class="box_post">
            <div class="pull-right">
                <button type="submit" value="1">Post</button>
            </div>
        </div>
    </form>
</div>
</div> */}




            {/* <div className="newPostContainer" style={{ border: "1px solid gray" }}> */}
            <div class="row-post">
                <div className="avatar_comment col-md-1" style={{backgroundColor: "#FFF"}}>
                    <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Avatar" style={{ width:  "52px;", borderRadius: "50%", padding: "10px" }} />
                    <span><button value="1" className="cancel-btn-addPost" style={{border:"none"}} onClick={(e) => { toggleControlePanel(e) }}><CloseIcon id="closePostBtn"/></button></span>
                </div>
                <div class="box_comment col-md-11">
                    <div className="postInputContainer">
                        <textarea className="commentar" id="inputPost" placeholder="Help others" onClick={(e) => { toggleControlePanel(e) }} name="Text1" cols="40" rows="5" style={{fontSize:"120%" ,backgroundColor:"#e0e0e04f"}}></textarea>
                        {/* <input placeholder="Help others" className="postInput" onClick={()=>{toggleControlePanel()}}/> */}
                    </div>

                </div>
                <div id="ControlPanel" className="newPostControlPanel" style={{ display: "none", position: "relative",padding: "13px" }}>
                    {/* <hr /> */}

                    <div class="box_post">
                        <div class="pull-right">
                            {/* <button className="btnPostControle" style={{ position: "relative" }}><CameraAltIcon /></button> */}
                            {/* <button value="1" className="btnPostControle" onClick={(e) => { toggleControlePanel(e) }}>X</button> */}
                            <button value="1" className="btnPostControle" onClick={() => { submitPost() }}>Post</button>
                        </div>
                    </div>

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




/////////////////////////////////////////////original/////////////////////////////////////////////

// <div className="newPostContainer" style={{ border: "1px solid gray" }}>
//     <div className="newPostPanelContainer">
//         <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Avatar" style={{ width: "60px", borderRadius: "50%", padding: "10px" }} />
//         <div className="postInputContainer">
//             <textarea id="inputPost" placeholder="Help others" className="postInput" onClick={(e) => { toggleControlePanel(e) }} name="Text1" cols="40" rows="5"></textarea>
//             {/* <input placeholder="Help others" className="postInput" onClick={()=>{toggleControlePanel()}}/> */}
//         </div>
//     </div>
//     <div id="ControlPanel" className="newPostControlPanel" style={{ display: "none", position: "relative" }}>
//         <hr />
//         <button className="btnPostControle" ><CameraAltIcon /></button>
//         <button className="btnPostControle"  onClick={(e) => { toggleControlePanel(e) }}><CancelIcon /></button>
//         <button className="btnPostControle" onClick={() => { submitPost() }}><PostAddIcon /></button>
//     </div>
// </div>