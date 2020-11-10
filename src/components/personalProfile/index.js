import React from 'react';
import './personalProfile.scss'
import PostCard from '../postCard/index'
import { connect } from 'react-redux';
import { checkIsLogedIn } from '../../store/auth'
import { getPostsByAuthorId } from '../../apiActions/posts';
import { getOneUser } from '../../apiActions/users';

import { useState, useEffect } from 'react';
import NewPostPanel from '../newPostPanel'




function PersonalProfile(props) {

  const [posts, setPosts] = useState([]);
  const [userInfo, setUser] = useState({});

  useEffect(async () => {

    // console.log(await getPostsByAuthorId(token));
    let myPosts = await getPostsByAuthorId(props.token);
    let user = await getOneUser(props.token);
    // console.log('user in personal profile : >>>>>>>>>>', user.data);
    myPosts = myPosts.data.results;
    user = user.data;
    console.log('user in personal profile : >>>>>>>>>>', user);
    // console.log('fetch result>>', myPosts);
    setPosts(myPosts);
    setUser(user);
    console.log("hello posts >>>>>>>> ", posts);
    console.log("hello user >>>>>>>> ", userInfo);
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
                      <li class="email">{userInfo.email}</li>
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
                          <input type="text" class="form-control" placeholder={props.user.name} />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 col-sm-3 col-xs-12 control-label">Name</label>
                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input type="text" class="form-control" placeholder={props.user.name} />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 col-sm-3 col-xs-12 control-label">Email</label>
                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input type="text" class="form-control" placeholder={userInfo.email} />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 col-sm-3 col-xs-12 control-label">Date of Birth</label>
                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input type="text" class="form-control" placeholder={userInfo.dob} />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 col-sm-3 col-xs-12 control-label">Expencsies</label>
                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input type="text" class="form-control" placeholder={userInfo.expencsies} />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 col-sm-3 col-xs-12 control-label">Family Count</label>
                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input type="text" class="form-control" placeholder={userInfo.familyCount} />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 col-sm-3 col-xs-12 control-label">Health Describtion</label>
                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input type="text" class="form-control" placeholder={userInfo.healthDesc} />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 col-sm-3 col-xs-12 control-label">Health Status</label>
                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input type="text" class="form-control" placeholder={userInfo.healthStatus} />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 col-sm-3 col-xs-12 control-label">Income</label>
                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input type="text" class="form-control" placeholder={userInfo.income} />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 col-sm-3 col-xs-12 control-label">National Number</label>
                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input type="text" class="form-control" placeholder={userInfo.nationalNo} />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 col-sm-3 col-xs-12 control-label">Paypal</label>
                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input type="text" class="form-control" placeholder={userInfo.payPal} />
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="col-md-2 col-sm-3 col-xs-12 control-label">Social status</label>
                        <div class="col-md-10 col-sm-9 col-xs-12">
                          <input type="text" class="form-control" placeholder={userInfo.socialStatus} />
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
