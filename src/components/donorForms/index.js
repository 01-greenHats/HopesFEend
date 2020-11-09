
// sign up and login forms for donors

import React from 'react';
// import Show from './show';
// import { AuthContext } from './context';
import './login.scss'

import { donorSignup, donorSignin } from '../../apiActions/donors';

class DonorRegisteration extends React.Component {

    constructor(props) {
        super(props);
      
        this.state = {
            signupName: '',
            signupPassword: '',
            signupEmail: '',
            username: '',
            password: '',
            active: false,

        }

    }

    handleChange = e => {
      
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmitSignup = async e => {
        e.preventDefault();
        let donor = {
            'name': this.state.signupName,
            'email': this.state.signupEmail,
            'password': this.state.signupPassword,

        }
        console.log("donor object from form ", donor)

        let signupResult = await donorSignup(donor);
        console.log('signupResult donor  : ', signupResult);
    }


    handleSubmitLogin = async e => {
        e.preventDefault();
        console.log(this.state)
        console.log("in handleSubmit login ")
        let loginResult = await donorSignin(this.state.username, this.state.password);
        console.log('loginResult donor : ', loginResult);
    }

    toggleClass = () => {
        console.log("inideeee")
        const currentState = this.state.active;
        console.log("before", this.state.active)
        this.setState({ active: !currentState });
        console.log("after", this.state.active)
    };
    render() {

        return (
            <>

                <div className= {this.state.active ? 'right-panel-active': null} id="container">

                    <div className="form-container sign-up-container">
                        <form className="donor-form" onSubmit={this.handleSubmitSignup}>
                            <h1 className="donor-header-light-card">Create Account</h1>
                            <div className="social-container">
                                <a href="#" className="social a-donor"><i class="fab fa-google-plus-g"></i></a>
                            </div>
                            <span className="span-donor">or use your email for registration</span>
                            <input className="donor-input-form" name="signupName"  onChange={this.handleChange} type="text" placeholder="Name" />
                            <input className="donor-input-form" name="signupEmail" onChange={this.handleChange} type="email" placeholder="Email" />
                            <input className="donor-input-form" name="signupPassword" onChange={this.handleChange} type="password" placeholder="Password" />
                            <button className="donor-button">Sign Up</button>
                        </form>
                    </div>

                    <div className="form-container sign-in-container">
                        <form className="donor-form"  onSubmit={this.handleSubmitLogin}>
                            <h1 className="donor-header-light-card">Sign in</h1>
                            <div className="social-container">
                                <a href="#" className="social a-donor"><i className="fab fa-google-plus-g"></i></a>
                            </div>
                            <span className="span-donor">or use your account</span>
                            <input className="donor-input-form" name="username" onChange={this.handleChange} type="text" placeholder="Name" />
                            <input className="donor-input-form" name="password"  onChange={this.handleChange} type="password" placeholder="Password" />
                            <button className="donor-button">Sign In</button>
                        </form>
                    </div>

                    <div className="overlay-container">

                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                
                                <h1 className="donor-header-dark-card">Welcome Back!</h1>
                                <p className="donor-form-para">To keep connected with us please login with your personal info</p>
                                <button className="donor-button ghost"  id="signIn"  onClick={this.toggleClass}>Sign In</button>
                            </div>

                            <div className="overlay-panel overlay-right">
                                <h1 className="donor-header-dark-card">Hello!</h1>
                                <p  className="donor-form-para">Enter your personal details and start with us as a Donor</p>
                                <button className="donor-button ghost"  id="signUp"  onClick={this.toggleClass}>Sign Up</button>
                            </div>

                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default DonorRegisteration;
