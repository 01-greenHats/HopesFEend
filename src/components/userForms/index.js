import React from 'react';
// import { AuthContext } from './context.js';
// import Show from '../auth/show';

import './login.scss'
import { Form, Col, Button, Card } from 'react-bootstrap';

import { inNeedUserSignin } from '../../apiActions/users';

class userResgisteration extends React.Component {



    // static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            nationalNo: 0,
            email: '',
            payPal: '',
            dob: '',
            familyCount: 0,
            socialStatus: '',
            healthStatus: '',
            healthDesc: '',
            income: 0,
            expencsies: 0,

            usernameLogin: '',
            passwordLogin: '',
            active: false,
        }

    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmitSignup = async e => {
        e.preventDefault();
        console.log(this.state)
        console.log("in handleSubmit")
        let loginResult = await inNeedUserSignin(this.state.username, this.state.password);
        console.log('loginResult : ', loginResult);
    }

    handleSubmitLogin = async e => {
        e.preventDefault();
        let user = {
            'name': this.state.name,
            'dob': this.state.dob,
            'email': this.state.email,
            'expencsies': Number(this.state.expencsies),
            'familyCount': Number(this.state.familyCount),
            'healthDesc': this.state.healthDesc,
            'healthStatus': this.state.healthStatus,
            'income': Number(this.state.income),
            'payPal': this.state.payPal,
            'nationalNo': Number(this.state.nationalNo),
            'password': this.state.password,
            'socialStatus': this.state.socialStatus,
        }
        console.log("userrrrrrs", user)

        let signupResult = await inNeedUserSignup(user);
        console.log('signupResult : ', signupResult);
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

                <div className={this.state.active ? 'right-panel-active' : null} id="user-container">
                    <div className="form-container user-sign-up-container">
                        <form className="user-form" onSubmit={this.handleSubmitSignup}>
                            {/* <h1 className="user-header-light-card">Create Account</h1> */}


                            <input className="user-input-form" name="familyCount" onChange={this.handleChange} type="text" placeholder="Family Count" />
                            <input className="user-input-form" name="socialStatus" onChange={this.handleChange} type="text" placeholder="Social Status" />
                            <input className="user-input-form" name="healthStatus" onChange={this.handleChange} type="text" placeholder="Health Status" />

                            <input className="user-input-form" name="income" onChange={this.handleChange} type="number" placeholder="Income" />
                            <input className="user-input-form" name="expencsies" onChange={this.handleChange} type="number" placeholder="Expencsies" />

                            <button className="user-button">Sign Up</button>
                           
                                <button className="user-button user-ghost" id="signIn" onClick={this.toggleClass}>Sign In</button>
                        </form>
                    </div>
                    <div className="user-form-container user-sign-in-container">
                        <form className="user-form" onSubmit={this.handleSubmitLogin}>
                            <h1 className="user-header-light-card">Sign in</h1>


                            <input className="user-input-form" name="username" onChange={this.handleChange} type="text" placeholder="Name" />
                            <input className="user-input-form" name="password" onChange={this.handleChange} type="password" placeholder="Password" />
                            <button className="user-button">Sign In</button>
                            <button className="user-button user-ghost" id="signUp" onClick={this.toggleClass}>Sign Up</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                {/* <h1 className="user-header-dark-card">Welcome Back!</h1> */}
                                {/* <p className="user-form-para">To keep connected with us please login with your personal info</p> */}
                         
                                <h1 className="user-header-light-card">Create Account</h1>
                                <input className="user-input-form" name="name" onChange={this.handleChange} type="text" placeholder="Name" />
                                <input className="user-input-form" name="email" onChange={this.handleChange} type="email" placeholder="Email" />
                                <input className="user-input-form" name="password" onChange={this.handleChange} type="password" placeholder="Password" />

                                <input className="user-input-form" name="nationalNo" onChange={this.handleChange} type="number" placeholder="National No" />
                                <input className="user-input-form" name="payPal" onChange={this.handleChange} type="email" placeholder="payPal Account" />
                                <input className="user-input-form" name="dob" onChange={this.handleChange} type="text" placeholder="Date of Birth" />



                                {/* <button className="user-button ghost" id="signIn" onClick={this.toggleClass}>Sign In</button> */}
                            </div>
                            <div className="overlay-panel overlay-right">
                                <button className="user-button user-ghost" id="signUp" onClick={this.toggleClass}>Sign Up</button>
                               
                                <h1 className="user-header-dark-card">Hello!</h1>
                                <p className="user-form-para">Enter your personal details and start with us as a Donor</p>
                                {/* <button className="user-button ghost"  id="signUp"  onClick={this.toggleClass}>Sign Up</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default userResgisteration;
