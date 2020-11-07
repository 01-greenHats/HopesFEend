import React from 'react';
// import { AuthContext } from './context.js';
// import Show from '../auth/show';

import { Form , Col, Button,Card} from 'react-bootstrap';

import {inNeedUserSignin} from '../../apiActions/users';

class Login extends React.Component {

    

    // static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async e => {
        e.preventDefault();
        console.log(this.state)
        console.log("in handleSubmit")
        let loginResult=await inNeedUserSignin(this.state.username, this.state.password);
        console.log('loginResult : ',loginResult);
    }

    render() {
        // console.log("this.context.loggedIn >> ", this.context.loggedIn)



        return (
            <>
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


export default Login;