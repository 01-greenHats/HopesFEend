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
            activeForm: false,
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
        const currentState = this.state.activeForm;
        console.log("before", this.state.activeForm)
        this.setState({ activeForm: !currentState });
        console.log("after", this.state.activeForm)
    };

    render() {
        // console.log("this.context.loggedIn >> ", this.context.loggedIn)



        return (
            <>


                <div class="main-box">
                    <div class="slider-cont">
                        <div class="signup-slider">
                            <div class="img-txt">
                                <div class="img-layer"></div>
                                {/* <h1>The hardest part of starting up is starting out for you.</h1> */}
                                {/* <img src="https://static.pexels.com/photos/33972/pexels-photo.jpg" /> */}
                            </div>
                            <div class="img-txt">
                                <div class="img-layer"></div>
                                {/* <h1>We understand you and your business, We have the right solutions for you.</h1> */}
                                {/* <img src="https://static.pexels.com/photos/257897/pexels-photo-257897.jpeg" /> */}
                            </div>
                            <div class="img-txt">
                                <div class="img-layer"></div>
                                <h1>Join US Now!</h1>
                                {/* <img src="https://static.pexels.com/photos/317383/pexels-photo-317383.jpeg" /> */}
                            </div>
                        </div>
                    </div>
                    <div class="form-cont">
                        <div class="top-buttons">
                            <button onClick={this.toggleClass} className={this.state.activeForm ? 'top-active-button' : null} class="to-signup top-active-button"> Sign Up </button>
                            <button onClick={this.toggleClass} className={this.state.activeForm ? 'top-active-button' : null} class="to-signin">Sign In</button>
                        </div>
                        <div class="form form-signup">
                            <form action="#">
                                <lable>Name</lable>
                                <input type="text"
                                    placeholder="Your username" />


                                <lable>Email</lable>
                                <input type="email"
                                    placeholder="Your email" />

                                <lable>PASSWORD</lable>
                                <input type="password"
                                    placeholder="Your password" />

                                <lable>National No.</lable>
                                <input type="password"
                                    placeholder="Your password" />


                                <lable>PASSWORD</lable>
                                <input type="password"
                                    placeholder="Your password" />



                                <lable>PASSWORD</lable>
                                <input type="password"
                                    placeholder="Your password" />



                                <lable>PASSWORD</lable>
                                <input type="password"
                                    placeholder="Your password" />



                                <lable>PASSWORD</lable>
                                <input type="password"
                                    placeholder="Your password" />



                                <lable>PASSWORD</lable>
                                <input type="password"
                                    placeholder="Your password" />


                                <p class="terms">
                                    <input type="checkbox" /> I agree all statments in
                                                 <a href="#" class="lined-link">terms of service</a>
                                </p>
                                <input type="submit"
                                    class="form-btn"
                                    value="Sign Up" />
                                <br /><br />
                                <a href="#" class="lined-link to-signin-link">I'm already member</a>
                            </form>
                        </div>

                        <div class="form form-signin">
                            <form action="#">
                                <lable>E-MAIL</lable>
                                <input type="email"
                                    placeholder="Your e-mail" />
                                <lable>PASSWORD</lable>
                                <input type="password"
                                    placeholder="Your password" />
                                <input type="submit"
                                    class="form-btn"
                                    value="Sign In" />
                                <br /><br />
                                <a href="#" class="lined-link to-signup-link">Create new account</a>
                            </form>
                        </div>
                    </div>
                    <div class="clear-fix"></div>
                </div>


                {/* ////////////////////////////////////////////////////////////////////

//// activa it  */}

                <div class="main-box">
                    <div class="slider-cont">
                        <div class="signup-slider">
                            <div class="img-txt">
                                <div class="img-layer"></div>
                                {/* <h1>The hardest part of starting up is starting out for you.</h1> */}
                                {/* <img src="https://static.pexels.com/photos/33972/pexels-photo.jpg" /> */}
                            </div>
                            <div class="img-txt">
                                <div class="img-layer"></div>
                                {/* <h1>We understand you and your business, We have the right solutions for you.</h1> */}
                                {/* <img src="https://static.pexels.com/photos/257897/pexels-photo-257897.jpeg" /> */}
                            </div>
                            <div class="img-txt">
                                <div class="img-layer"></div>
                                <h1>Join US Now!</h1>
                                {/* <img src="https://static.pexels.com/photos/317383/pexels-photo-317383.jpeg" /> */}
                            </div>
                        </div>
                    </div>
                    <div class="form-cont">
                        <div class="top-buttons">
                            <button onClick={this.toggleClass} className={this.state.activeForm ? 'top-active-button' : null} class="to-signup top-active-button"> Sign Up </button>
                            <button onClick={this.toggleClass} className={this.state.activeForm ? 'top-active-button' : null} class="to-signin">Sign In</button>
                        </div>
                        <div class="form form-signup">
                            <form action="#">
                                <lable>Name</lable>
                                <input type="text"
                                    placeholder="Your username" />

                                <lable>Email</lable>
                                <input type="email"
                                    placeholder="Your email" />


                                <lable>PASSWORD</lable>
                                <input type="password"
                                    placeholder="Your password" />


                                <p class="terms">
                                    <input type="checkbox" /> I agree all statments in
                                                 <a href="#" class="lined-link">terms of service</a>
                                </p>
                                <input type="submit"
                                    class="form-btn"
                                    value="Sign Up" />
                                <br /><br />
                                <a href="#" class="lined-link to-signin-link">I'm already member</a>
                            </form>
                        </div>

                        <div class="form form-signin">
                            <form action="#">
                                <lable>E-MAIL</lable>
                                <input type="email"
                                    placeholder="Your e-mail" />
                                <lable>PASSWORD</lable>
                                <input type="password"
                                    placeholder="Your password" />
                                <input type="submit"
                                    class="form-btn"
                                    value="Sign In" />
                                <br /><br />
                                <a href="#" class="lined-link to-signup-link">Create new account</a>
                            </form>
                        </div>
                    </div>
                    <div class="clear-fix"></div>
                </div>


                {/* <Show condition={this.context.loggedIn}> */}
                {/* <Button id ="logout" variant="primary" onClick={this.context.logout}>Logout</Button> */}
                {/* </Show> */}
                {/* <Show condition={!this.context.loggedIn}> */}
                <Card id="cardsiginupForm">

                    <Form onSubmit={this.handleSubmit} id="siginupForm">
                        <fieldset> <h5>Already Registered? login here</h5>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Username</Form.Label>
                                <Form.Control name="username" onChange={this.handleChange} placeholder="Username" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control placeholder="Password" name="password" type="password" onChange={this.handleChange} />
                            </Form.Group>
                            <Button variant="primary" type="submit">Login</Button>
                        </fieldset>
                    </Form>

                </Card>
                {/* </Show> */}
            </>
        )

    }


}


export default userResgisteration;