import React from 'react';
import { connect } from 'react-redux';
import { Redirect,useHistory  } from "react-router-dom";
import { setLoginState } from '../../store/auth';
import { Form, Col, Button, Card } from 'react-bootstrap';
import { inNeedUserSignup } from '../../apiActions/users';



const Signup = props => {
    const history = useHistory()
    const handleSubmit = async (e)=>{
        e.preventDefault();
        let user = {
            'name': e.target.name.value,
            'dob': e.target.dob.value,
            'email': e.target.email.value,
            'expencsies': Number(e.target.expencsies.value),
            'familyCount': Number(e.target.familyCount.value),
            'healthDesc': e.target.healthDesc.value,
            'healthStatus': e.target.healthStatus.value,
            'income': Number(e.target.income.value),
            'payPal': e.target.payPal.value,
            'nationalNo':Number(e.target.nationalNo.value) ,
            'password': e.target.password.value,
            'socialStatus': e.target.socialStatus.value,
        }
        let signupResult=await inNeedUserSignup(user);
        console.log('signupResult : ',signupResult);
        if(signupResult.status == 200){
            // props.setLoginState({token:signupResult.data,user:user,loggedIn:true})
            props.setLoginState({
                token:signupResult.data.token,
                addedUser:signupResult.data.loggedUser,
                loggedIn:true
            });
            history.push("/");
        }
        e.target.reset();
    }

    return (
        <>
            <Card id="cardsiginupForm">
                <form onSubmit={(e)=>{handleSubmit(e)}}  id="siginupForm">
                    <fieldset> <h5>Don't have an account yet?  Sign Up </h5>
                        <Form.Row>

                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>name</Form.Label>
                                <Form.Control name="name" type= "string" placeholder="name" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>password</Form.Label>
                                <Form.Control placeholder="password" name="password" type="password" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>nationalNo</Form.Label>
                                <Form.Control placeholder="nationalNo" name="nationalNo"  type="number" />
                            </Form.Group>


                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>email</Form.Label>
                                <Form.Control placeholder="email" name="email" type="string" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>payPal</Form.Label>
                                <Form.Control placeholder="payPal" name="payPal" type="string" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>dob</Form.Label>
                                <Form.Control placeholder="dob" name="dob" type="string" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>familyCount</Form.Label>
                                <Form.Control placeholder="familyCount" name="familyCount" type="number" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>healthStatus</Form.Label>
                                <Form.Control placeholder="healthStatus" name="healthStatus" type="string" />
                            </Form.Group>


                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>healthDesc</Form.Label>
                                <Form.Control placeholder="healthDesc" name="healthDesc" type="string" />
                            </Form.Group>


                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>income</Form.Label>
                                <Form.Control placeholder="income" name="income" type="number" />
                            </Form.Group>


                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>expencsies</Form.Label>
                                <Form.Control placeholder="expencsies" name="expencsies" type="number" />
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>socialStatus</Form.Label>
                                <Form.Control placeholder="socialStatus" name="socialStatus" type="string" />
                            </Form.Group>



                            <Form.Group as={Col} controlId="formGridState">
                               
                               
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit">Sign up</Button>
                    </fieldset>
                </form>
            </Card>
        </>
    )
}

const mapStateToProps = state => (
    {
        // inNeedUsers: state.inNeedUsers.inNeedUsers,
    }
);
const mapDispatchToProps = { setLoginState };
export default connect(mapStateToProps, mapDispatchToProps)(Signup);