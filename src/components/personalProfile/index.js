import React from 'react';
import './personalProfile.scss'

import CameraAltIcon from '@material-ui/icons/CameraAlt';
import PostAddIcon from '@material-ui/icons/PostAdd';
import CancelIcon from '@material-ui/icons/Cancel';
import { addPost } from '../../apiActions/posts';
import { connect } from 'react-redux';

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
}

export default function personalProfile() {

  return (
    <>
      <main>
        <div class="page-header header-filter" data-parallax="true" ></div>
        <div class="main main-raised">
          <div class="profile-content">
            <div class="container">
              <div class="row">
                <div class="col-md-6 ml-auto mr-auto">
                  <div class="profile">
                    <div class="avatar">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTe9yWmtBD3aj_7mqHn9SVadOiSVM2Ge2TXyQ&usqp=CAU" alt="Circle Image" class="img-raised rounded-circle img-fluid" />
                    </div>
                    <div class="name">
                      <h3 class="title">Hisham AlNaji</h3>
                      <a href="#pablo" class="btn btn-just-icon btn-link btn-dribbble"><i class="fa fa-dribbble"></i></a>
                      <a href="#pablo" class="btn btn-just-icon btn-link btn-twitter"><i class="fa fa-twitter"></i></a>
                      <a href="#pablo" class="btn btn-just-icon btn-link btn-pinterest"><i class="fa fa-pinterest"></i></a>
                    </div>
                  </div>
                </div>
              </div>
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
            </div>
          </div>
        </div>
      </main>
    </>
  );
}