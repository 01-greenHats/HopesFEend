import React from 'react';


import './login.scss'
import Typical from 'react-typical'

import { inNeedUserSignin } from '../../apiActions/users';
import { inNeedUserSignup } from '../../apiActions/users';

class userResgisteration extends React.Component {

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
    handleSubmitLogin = async e => {
        e.preventDefault();
        console.log(this.state)
        console.log("in handleSubmit")
        let loginResult = await inNeedUserSignin(this.state.usernameLogin, this.state.passwordLogin);
        console.log('loginResult : ', loginResult);
    }

    handleSubmitSignup = async e => {
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

                            <input className="user-input-form" name="familyCount" onChange={this.handleChange} type="text" placeholder="Family Count" />
                            <input className="user-input-form" name="socialStatus" onChange={this.handleChange} type="text" placeholder="Social Status" />
                            <input className="user-input-form" name="healthStatus" onChange={this.handleChange} type="text" placeholder="Health Status" />
                            <input className="user-input-form" name="healthDesc" onChange={this.handleChange} type="text" placeholder="Health Description" />
                            <input className="user-input-form" name="income" onChange={this.handleChange} type="number" placeholder="Income" />
                            <input className="user-input-form" name="expencsies" onChange={this.handleChange} type="number" placeholder="Expencsies" />

                            <div>
                                <button className="user-button">Sign Up</button>
                                <button className="user-button ghost" id="signIn" onClick={this.toggleClass}> Sign In</button>
                            </div>


                        </form>
                    </div>

                    <div className="user-form-container user-sign-in-container">
                        <form className="user-form" onSubmit={this.handleSubmitLogin}>

                            <h1 className="user-header-card">Sign in</h1>
                            <input className="user-input-form" name="usernameLogin" onChange={this.handleChange} type="text" placeholder="Name" />
                            <input className="user-input-form" name="passwordLogin" onChange={this.handleChange} type="password" placeholder="Password" />
                            <button className="user-button">Sign In  </button>

                        </form>

                    </div>


                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">

                            <form className="user-form" onSubmit={this.handleSubmitSignup}>


                                <h1 className="user-header-card">Create Account</h1>
                                <p className="user-form-para">To keep connected with us please sign up with your personal info</p>

                                <input className="user-input-form" name="name" onChange={this.handleChange} type="text" placeholder="Name" />
                                <input className="user-input-form" name="email" onChange={this.handleChange} type="email" placeholder="Email" />
                                <input className="user-input-form" name="password" onChange={this.handleChange} type="password" placeholder="Password" />

                                <input className="user-input-form" name="nationalNo" onChange={this.handleChange} type="number" placeholder="National No" />
                                <input className="user-input-form" name="payPal" onChange={this.handleChange} type="email" placeholder="PayPal Account" />
                                <input className="user-input-form" name="dob" onChange={this.handleChange} type="text" placeholder="Date of Birth" />
                                </form>
                            </div>

                            <div className="overlay-panel overlay-right">
                                <h1 className="user-header-dark-card">Not Joined Yet!</h1>
                                <Typical
                                    className="user-form-para"
                                    steps={['Click here', 1000, 'Click here to enter your personal details and start with us', 700]}

                                    loop={Infinity}
                                    wrapper="p"
                                />
                                <button className="user-button user-ghost" id="signUp" onClick={this.toggleClass}>Sign Up</button>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default userResgisteration;

