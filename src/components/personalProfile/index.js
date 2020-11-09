import React from 'react';
import './personalProfile.scss'
import PostCard from '../postCard/index'
import { connect } from 'react-redux';
import { checkIsLogedIn } from '../../store/auth'
import { getPostsByAuthorId } from '../../apiActions/posts';

import { useState, useEffect } from 'react';
import NewPostPanel from '../newPostPanel'




function PersonalProfile(props) {

  const [ posts , setPosts ] = useState([]);
  console.log('props>>>>>>>>>>', props);
  useEffect(async () => {
    
    // console.log(await getPostsByAuthorId(token));
    let myPosts = await getPostsByAuthorId(props.token);
    myPosts=myPosts.data.results;
    console.log('fetch result>>', myPosts);
    setPosts(myPosts)
    console.log("hello posts >>>>>>>> " , posts);
  }, []);

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
              <div>
                <NewPostPanel />
                <div>{
                  posts.map((post, idex) => {
                    return (
                      <PostCard key={idex}
                        post={post} />
                    );
                  })
                }
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

const mapStateToProps = state => (
  {
      token: state.auth.token,
      loggedIn: state.auth.loggedIn
  }
);

const mapDispatchToProps = {checkIsLogedIn};
export default connect(mapStateToProps, mapDispatchToProps)(PersonalProfile);
// export default connect(mapStateToProps)(PostCard);

// export default PostCard;
