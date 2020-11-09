import React from 'react';
import './personalProfile.scss'

import CameraAltIcon from '@material-ui/icons/CameraAlt';
import PostAddIcon from '@material-ui/icons/PostAdd';
import CancelIcon from '@material-ui/icons/Cancel';
import { addPost } from '../../apiActions/posts';
import { connect } from 'react-redux';



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
              <div class="description text-center">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}