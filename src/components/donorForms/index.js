import React from 'react';
import { connect } from 'react-redux';
import { Redirect,useHistory  } from "react-router-dom";
import { setLoginState } from '../../store/auth';
import './login.scss'

import { donorSignup, donorSignin } from '../../apiActions/donors';

const DonorRegisteration = props => {
    const history = useHistory()
    var active = false;
    const toggleClass = ()=>{
        if(active){
            active = false
            document.getElementById('container').className = ''
        }else{
            active = true
            document.getElementById('container').className = 'right-panel-active'
        }
    }

    const handleSubmitSignup = async e => {
        e.preventDefault();
        let donor = {
            'name': e.target.signupName.value,
            'email': e.target.signupEmail.value,
            'password': e.target.signupPassword.value,

        }
        console.log("donor object from form ", donor)

        let signupResult = await donorSignup(donor);
        if(signupResult.status == 200){
            console.log('signupResult donor  : ', signupResult);
            props.setLoginState({
                token:signupResult.data.token,
                user:signupResult.data.addedUser,
                loggedIn:true
            });
            history.push("/");
        }
    }


    const handleSubmitLogin = async e => {
        e.preventDefault();
        // console.log(this.state)
        let loginResult = await donorSignin(e.target.username.value, e.target.password.value);
        console.log("in handleSubmit login ",loginResult.data)
        if(loginResult.status == 200){
            props.setLoginState({
                token:loginResult.data.token.token,
                user:loginResult.data.loggedUser,
                loggedIn:true
            });
            history.push("/");
        }
        console.log('loginResult donor : ', loginResult);
    }


        return (
            <>

                <div className= {active ? 'right-panel-active': null} id="container">

                    <div className="form-container sign-up-container">
                        <form className="donor-form" onSubmit={(e)=>{handleSubmitSignup(e)}}>
                            <h1 className="donor-header-light-card">Create Account</h1>
                            <div className="social-container">
                                <a href="#" className="social a-donor"><i className="fab fa-google-plus-g"></i></a>
                            </div>
                            <span className="span-donor">or use your email for registration</span>
                            <input className="donor-input-form" name="signupName"  type="text" placeholder="Name" />
                            <input className="donor-input-form" name="signupEmail" type="email" placeholder="Email" />
                            <input className="donor-input-form" name="signupPassword" type="password" placeholder="Password" />
                            <button className="donor-button">Sign Up</button>
                        </form>
                    </div>

                    <div className="form-container sign-in-container">
                        <form className="donor-form"  onSubmit={(e)=>{handleSubmitLogin(e)}}>
                            <h1 className="donor-header-light-card">Sign in</h1>
                            <div className="social-container">
                                <a href="#" className="social a-donor"><i className="fab fa-google-plus-g"></i></a>
                            </div>
                            <span className="span-donor">or use your account</span>
                            <input className="donor-input-form" name="username" type="text" placeholder="Name" />
                            <input className="donor-input-form" name="password"  type="password" placeholder="Password" />
                            <button className="donor-button">Sign In</button>
                        </form>
                    </div>

                    <div className="overlay-container">

                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                
                                <h1 className="donor-header-dark-card">Welcome Back!</h1>
                                <p className="donor-form-para">To keep connected with us please login with your personal info</p>
                                <button className="donor-button ghost"  id="signIn"  onClick={()=>{toggleClass()}}>Sign In</button>
                            </div>

                            <div className="overlay-panel overlay-right">
                                <h1 className="donor-header-dark-card">Hello!</h1>
                                <p  className="donor-form-para">Enter your personal details and start with us as a Donor</p>
                                <button className="donor-button ghost"  id="signUp"  onClick={()=>{toggleClass()}}>Sign Up</button>
                            </div>

                        </div>
                    </div>
                </div>

            </>
        )
}

const mapStateToProps = state => (
    {
        // inNeedUsers: state.inNeedUsers.inNeedUsers,
    }
);
const mapDispatchToProps = { setLoginState };
export default connect(mapStateToProps, mapDispatchToProps)(DonorRegisteration);
