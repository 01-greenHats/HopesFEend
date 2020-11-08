import React from 'react';
import { connect } from 'react-redux';
import { Redirect,useHistory  } from "react-router-dom";
import { setLoginState } from '../../store/auth';
import { Form, Col, Button, Card } from 'react-bootstrap';
import { inNeedUserSignin } from '../../apiActions/users';
import './login.scss';



const Login = props => {
    const history = useHistory()

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(`${e.target.username.value} : ${e.target.password.value}`);
        let loginResult=await inNeedUserSignin(e.target.username.value, e.target.password.value);
        if(loginResult.status == 200){
            console.log(loginResult.data)
            props.setLoginState({
                token:loginResult.data.token.token,
                loggedUser:loginResult.data.token.loggedUser,
                loggedIn:true
            });
            history.push("/");
        }
        console.log('loginResult : ',loginResult);
        // e.preventDefault();
        // let signupResult=await inNeedUserSignup(user);
        // console.log('signupResult : ',signupResult);
        // if(signupResult.status == 200){
        //     props.setLoginState({token:signupResult.data,user:user,loggedIn:true})
        // }
        // e.target.reset();
    }

    return (
        <>
                    <Card id="cardsiginupForm">
                    
                    <Form onSubmit={(e)=>{handleSubmit(e)}} id="siginupForm">
                    <fieldset> <h5>Already Registered? login here</h5>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control name="username" placeholder="Username" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control placeholder="Password" name="password" type="password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">Log In</Button>
                        </fieldset>
                    </Form>
                   
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
export default connect(mapStateToProps, mapDispatchToProps)(Login);