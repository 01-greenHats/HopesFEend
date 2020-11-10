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

  async function handleUpdateUser(e) {
    console.log('updated heloooooooooooooooooooooo >>>>>>>>>>>>>');
    e.preventDefault();
    let updatedUser = {
      "email": e.target.email.value,
      "dob": e.target.dob.value,
      "expencsies": Number(e.target.expencsies.value),
      "familyCount": Number(e.target.familyCount.value),
      "healthDesc": e.target.healthDesc.value,
      "healthStatus": e.target.healthStatus.value,
      "income": Number(e.target.income.value),
      "nationalNo": Number(e.target.nationalNo.value),
      "payPal": e.target.payPal.value,
      "name": e.target.name.value
    }
    let updateResult = await updateUser(updatedUser, userInfo._id);
    console.log('updated result>>>>>>>>>>>>>', updateResult);
  }

  return (
    <>
      <main>
        <div className="container">
          <div className="view-account">
            <section className="module">
              <div className="module-inner">
                <div className="elements">
                  <div className="side-bar">
                    <div className="user-info">
                      <img className="img-profile" src="https://www.flaticon.com/svg/static/icons/svg/599/599305.svg" alt="" />
                      <ul className="meta list list-unstyled">
                        <li className="name">{props.user.name}</li>
                        <li className="email">{userInfo.email}</li>
                      </ul>
                    </div>
                  </div>
                  <div className="content-panel">
                    <form method="get" id="login-form" class="login-form" autocomplete="off" onSubmit={(e) => handleUpdateUser(e)}>
                      <h1 class="a11y-hidden">Personal Info</h1>
                      <div>
                        <label class="label-email">
                          <input type="email" class="text" name="userName" tabindex="1" defaultValue={props.user.name} />
                          <span class="required">User Name</span>
                        </label>
                      </div>
                      <input type="checkbox" name="show-password" class="show-password a11y-hidden" id="show-password" tabindex="3" />
                      <div>
                        <label class="label-password">
                          <input type="text" class="text" name="name" tabindex="2" defaultValue={props.user.name} />
                          <span class="required">Name</span>
                        </label>
                      </div>
                      <div>
                        <label class="label-password">
                          <input type="text" class="text" name="email" tabindex="2" defaultValue={userInfo.email} />
                          <span class="required">Email</span>
                        </label>
                      </div>
                      <div>
                        <label class="label-password">
                          <input type="text" class="text" name="dob" tabindex="2" defaultValue={userInfo.dob} />
                          <span class="required">Date of Birth</span>
                        </label>
                      </div>
                      <div>
                        <label class="label-password">
                          <input type="text" class="text" name="expencsies" tabindex="2" defaultValue={userInfo.expencsies} />
                          <span class="required">Expencsies</span>
                        </label>
                      </div>
                      <div>
                        <label class="label-password">
                          <input type="text" class="text" name="familyCount" tabindex="2" defaultValue={userInfo.familyCount} />
                          <span class="required">Family Count</span>
                        </label>
                      </div>
                      <div>
                        <label class="label-password">
                          <input type="text" class="text" name="healthDesc" tabindex="2" defaultValue={userInfo.healthDesc} />
                          <span class="required">Health Describtion</span>
                        </label>
                      </div>
                      <div>
                        <label class="label-password">
                          <input type="text" class="text" name="healthStatus" tabindex="2" defaultValue={userInfo.healthStatus} />
                          <span class="required">Health Status</span>
                        </label>
                      </div>
                      <div>
                        <label class="label-password">
                          <input type="text" class="text" name="income" tabindex="2" defaultValue={userInfo.income} />
                          <span class="required">Income</span>
                        </label>
                      </div>
                      <div>
                        <label class="label-password">
                          <input type="text" class="text" name="nationalNo" tabindex="2" defaultValue={userInfo.nationalNo} />
                          <span class="required">National Number</span>
                        </label>
                      </div>
                      <div>
                        <label class="label-password">
                          <input type="text" class="text" name="payPal" tabindex="2" defaultValue={userInfo.payPal} />
                          <span class="required">Paypal</span>
                        </label>
                      </div>
                      <div>
                        <label class="label-password">
                          <input type="text" class="text" name="socialStatus" tabindex="2" defaultValue={userInfo.socialStatus} />
                          <span class="required">Social status</span>
                        </label>
                      </div>
                      <input type="submit" value="Update Profile" />

                    </form>
                  </div>

                </div>
                <div className="post">
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
