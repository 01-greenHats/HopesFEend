import React from 'react';
// import Show from './show';
// import { AuthContext } from './context';

import { Form , Col, Button,Card} from 'react-bootstrap';


class Signup extends React.Component {
    // static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            password: '',
            nationalNo:0 ,
            email:'',
            payPal:'',
            dob:'',
            familyCount:0,
            socialStatus:'',
            healthStatus:'',
            healthDesc:'',
            income:0,
            expencsies:0,
        }
    }

  

    handleChange = e => {
        console.log("target.value", e.target.value)
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('context is');
        console.log(this.context)
        this.context.signUp(
            this.state.name,
            this.state.dob,
            this.state.email,
            this.state.expencsies,
            this.state.familyCount,
            this.state.healthDesc,
            this.state.healthStatus,
            this.state.income,
            this.state.payPal,
            this.state.nationalNo,
            this.state.password,
            this.state.socialStatus,
           );
    }

    /// roqaiauser2   123 user
    /// roqaia 123  admin
    render() {

        return (
            <>
            <h1>hello</h1>
            {/* // <Show condition={!this.context.loggedIn}> */}
                <Card id = "cardsiginupForm">
                <Form onSubmit={this.handleSubmit} id = "siginupForm"> 
                <fieldset> <h5>Don't have an account yet?  Sign Up </h5>
                <Form.Row>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" onChange={this.handleChange} placeholder="Username" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control placeholder="Password" name="password" type="password" onChange={this.handleChange} />
                    </Form.Group>
                    
                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>role</Form.Label>
                        <Form.Control as="select" onChange={this.handleChange} name="role" defaultValue="Choose...">
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                            <option value="editor">editor</option>
                        </Form.Control>
                    </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="submit">Sign up</Button>
                    </fieldset>
                </Form>
                </Card>
            {/* // </Show> */}
            </>
        )
    }

}

export default Signup;