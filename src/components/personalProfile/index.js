import React from 'react';
import './personalProfile.scss'
import PostCard from '../postCard/index'
import { connect } from 'react-redux';
import { checkIsLogedIn } from '../../store/auth'
import { getPostsByAuthorId } from '../../apiActions/posts';
import { getOneUser } from '../../apiActions/users';
import { updateUser } from '../../apiActions/users';
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

  async function handleUpdateUser(e){
    console.log('updated heloooooooooooooooooooooo >>>>>>>>>>>>>');
    e.preventDefault();
    let updatedUser = {
      "email" : e.target.email.value,
      "dob" : e.target.dob.value,
      "expencsies" : Number(e.target.expencsies.value),
      "familyCount" : Number(e.target.familyCount.value),
      "healthDesc" : e.target.healthDesc.value,
      "healthStatus" : e.target.healthStatus.value,
      "income" : Number(e.target.income.value),
      "nationalNo" : Number(e.target.nationalNo.value),
      "payPal" : e.target.payPal.value,
      "name" : e.target.name.value
    }
    let updateResult = await updateUser(updatedUser,userInfo._id);
    console.log('updated result>>>>>>>>>>>>>', updateResult);
  }

  return (
    <>
      <main>
        <div className="container">
          <div className="view-account">
            <section className="module">
              <div className="module-inner">
                <div className="side-bar">
                  <div className="user-info">
                    <img className="img-profile img-circle img-responsive center-block" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                    <ul className="meta list list-unstyled">
                      <li className="name">{props.user.name}</li>
                      <li className="email">{userInfo.email}</li>
                    </ul>
                  </div>
                </div>
                <div className="content-panel">
                  <form onSubmit={(e)=>handleUpdateUser(e)} className="form-horizontal">
                    <fieldset className="fieldset">
                      <h3 className="fieldset-title">Personal Info</h3>
                      
                      <div className="form-group">
                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">User Name</label>
                        <div className="col-md-10 col-sm-9 col-xs-12">
                          <input name="userName" type="text" className="form-control" defaultValue={props.user.name} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Name</label>
                        <div className="col-md-10 col-sm-9 col-xs-12">
                          <input name="name" type="text" className="form-control" defaultValue={props.user.name} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Email</label>
                        <div className="col-md-10 col-sm-9 col-xs-12">
                          <input name="email" type="text" className="form-control" defaultValue={userInfo.email} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Date of Birth</label>
                        <div className="col-md-10 col-sm-9 col-xs-12">
                          <input name="dob" type="text" className="form-control" defaultValue={userInfo.dob} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Expencsies</label>
                        <div className="col-md-10 col-sm-9 col-xs-12">
                          <input name="expencsies" type="text" className="form-control" defaultValue={userInfo.expencsies} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Family Count</label>
                        <div className="col-md-10 col-sm-9 col-xs-12">
                          <input name="familyCount" type="text" className="form-control" defaultValue={userInfo.familyCount} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Health Describtion</label>
                        <div className="col-md-10 col-sm-9 col-xs-12">
                          <input name="healthDesc" type="text" className="form-control" defaultValue={userInfo.healthDesc} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Health Status</label>
                        <div className="col-md-10 col-sm-9 col-xs-12">
                          <input name="healthStatus" type="text" className="form-control" defaultValue={userInfo.healthStatus} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Income</label>
                        <div className="col-md-10 col-sm-9 col-xs-12">
                          <input name="income" type="text" className="form-control" defaultValue={userInfo.income} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">National Number</label>
                        <div className="col-md-10 col-sm-9 col-xs-12">
                          <input name="nationalNo" type="text" className="form-control" defaultValue={userInfo.nationalNo} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Paypal</label>
                        <div className="col-md-10 col-sm-9 col-xs-12">
                          <input name="payPal" type="text" className="form-control" defaultValue={userInfo.payPal} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-md-2 col-sm-3 col-xs-12 control-label">Social status</label>
                        <div className="col-md-10 col-sm-9 col-xs-12">
                          <input name="socialStatus" type="text" className="form-control" defaultValue={userInfo.socialStatus} />
                        </div>
                      </div>
                    </fieldset>
                  
                    <div className="form-group">
                      <div className="col-md-10 col-sm-9 col-xs-12 col-md-push-2 col-sm-push-3 col-xs-push-0">
                        <button className="btn btn-primary" type="submit">Update Profile</button>
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
