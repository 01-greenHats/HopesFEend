import React from 'react';
import './personalProfile.scss'
import PostCard from '../postCard/index'
import { connect } from 'react-redux';
import { checkIsLogedIn } from '../../store/auth'
import { getPostsByAuthorId } from '../../apiActions/posts';

import { useState, useEffect } from 'react';
import NewPostPanel from '../newPostPanel'




function PersonalProfile(props) {

  const [posts, setPosts] = useState([]);

  useEffect(async () => {

    // console.log(await getPostsByAuthorId(token));
    let myPosts = await getPostsByAuthorId(props.token);
    myPosts = myPosts.data.results;
    console.log('fetch result>>', myPosts);
    setPosts(myPosts)
    console.log("hello posts >>>>>>>> ", posts);
    console.log('props in personal profile : >>>>>>>>>>', props);
  }, []);

  return (
    <>
      <main>
        <div class="container">
          <div class="view-account">
            <section class="module">
              <div class="module-inner">
                <div class="side-bar">
                  <div class="user-info">
                    <img class="img-profile img-circle img-responsive center-block" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                    <ul class="meta list list-unstyled">
                      <li class="name">{props.user.name}</li>
                      <li class="email">Rebecca.S@website.com</li>
                      <li class="activity">Last logged in: Today at 2:18pm</li>
                    </ul>
                  </div>
                </div>
                <div class="content-panel">
                  <form class="form-horizontal">
                    <fieldset class="fieldset">
                      <h3 class="fieldset-title">Personal Info</h3>
                      
                      <div class="form-group">
                        <label class="col-md-2 col-sm-3 col-xs-12 control-label">User Name</label>
                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input type="text" class="form-control" value="Rebecca" />
                        </div>
                      </div>

                      <div class="form-group">
                        <label class="col-md-2 col-sm-3 col-xs-12 control-label">First Name</label>
                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input type="text" class="form-control" value="Rebecca" />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 col-sm-3 col-xs-12 control-label">Last Name</label>
                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input type="text" class="form-control" value="Sanders" />
                        </div>
                      </div>
                    </fieldset>
                  
                    <div class="form-group">
                      <div class="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
                        <input class="btn btn-primary" type="submit" value="Update Profile" />
                      </div>
                    </div>
                  </form>
                  
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
            </section>
          </div>
        </div>
        {/* <div class="page-header header-filter" data-parallax="true" ></div>
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
                      <h3 class="title">{props.user.name}</h3>
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
        </div> */}
      </main>
    </>
  );
}

const mapStateToProps = state => (
  {
    token: state.auth.token,
    loggedIn: state.auth.loggedIn,
    user: state.auth.user,
  }
);

const mapDispatchToProps = { checkIsLogedIn };
export default connect(mapStateToProps, mapDispatchToProps)(PersonalProfile);
// export default connect(mapStateToProps)(PostCard);

// export default PostCard;
