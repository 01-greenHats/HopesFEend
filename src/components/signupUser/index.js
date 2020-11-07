import React from 'react';
// import Show from './show';
// import { AuthContext } from './context';

import { Form, Col, Button, Card } from 'react-bootstrap';

import { inNeedUserSignup } from '../../apiActions/users';

class Signup extends React.Component {
    

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
        }
    }



    handleChange = e => {
        console.log("target.value", e.target.value)
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit = async e => {
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
            'nationalNo':Number(this.state.nationalNo) ,
            'password': this.state.password,
            'socialStatus': this.state.socialStatus,
        }
        console.log("userrrrrrs",user)

        let signupResult=await inNeedUserSignup(user);
        console.log('signupResult : ',signupResult);
    }

    render() {

        return (
            <>
                <h1>hello</h1>
                {/* // <Show condition={!this.context.loggedIn}> */}
                <Card id="cardsiginupForm">
                    <Form onSubmit={this.handleSubmit} id="siginupForm">
                        <fieldset> <h5>Don't have an account yet?  Sign Up </h5>
                            <Form.Row>

        
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>name</Form.Label>
                                    <Form.Control name="name" type= "string" onChange={this.handleChange} placeholder="name" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>password</Form.Label>
                                    <Form.Control placeholder="password" name="password" type="password" onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>nationalNo</Form.Label>
                                    <Form.Control placeholder="nationalNo" name="nationalNo"  type="number" onChange={this.handleChange} />
                                </Form.Group>


                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>email</Form.Label>
                                    <Form.Control placeholder="email" name="email" type="string" onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>payPal</Form.Label>
                                    <Form.Control placeholder="payPal" name="payPal" type="string" onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>dob</Form.Label>
                                    <Form.Control placeholder="dob" name="dob" type="string" onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>familyCount</Form.Label>
                                    <Form.Control placeholder="familyCount" name="familyCount" type="number" onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>healthStatus</Form.Label>
                                    <Form.Control placeholder="healthStatus" name="healthStatus" type="string" onChange={this.handleChange} />
                                </Form.Group>


                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>healthDesc</Form.Label>
                                    <Form.Control placeholder="healthDesc" name="healthDesc" type="string" onChange={this.handleChange} />
                                </Form.Group>


                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>income</Form.Label>
                                    <Form.Control placeholder="income" name="income" type="number" onChange={this.handleChange} />
                                </Form.Group>


                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>expencsies</Form.Label>
                                    <Form.Control placeholder="expencsies" name="expencsies" type="number" onChange={this.handleChange} />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>socialStatus</Form.Label>
                                    <Form.Control placeholder="socialStatus" name="socialStatus" type="string" onChange={this.handleChange} />
                                </Form.Group>



                                <Form.Group as={Col} controlId="formGridState">
                                   
                                   
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