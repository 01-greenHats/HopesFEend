import React from 'react';
import { connect } from 'react-redux';
import { useHistory  } from "react-router-dom";
import './login.scss'
import Typical from 'react-typical'
import { setLoginState } from '../../store/auth';
import { inNeedUserSignup } from '../../apiActions/users';
import { inNeedUserSignin } from '../../apiActions/users';

const userResgisteration = props => {
    const history = useHistory()
var active = false;

    const toggleClass = ()=>{
        if(active){
            active = false
            document.getElementById('user-container').className = ''
        }else{
            active = true
            document.getElementById('user-container').className = 'right-panel-active'
        }
    }
    const handleSubmitLogin = async (e) => {
        e.preventDefault();
        console.log("in handleSubmit")
        let loginResult = await inNeedUserSignin(e.target.usernameLogin.value, e.target.passwordLogin.value);
        if(loginResult.status == 200){
            props.setLoginState({
                token:loginResult.data.token.token,
                loggedUser:loginResult.data.token.loggedUser,
                loggedIn:true
            });
            history.push("/");
        }
        console.log('loginResult : ', loginResult);
    }

    const handleSubmitSignup = async (e) => {
        e.preventDefault();
        let name= document.getElementById("name").value;
        let dob= document.getElementById("dob").value;
        let email= document.getElementById("email").value;
        let expencsies= Number(document.getElementById("expencsies").value);
        let familyCount= Number(document.getElementById("familyCount").value);
        let healthDesc= document.getElementById("healthDesc").value;
        let healthStatus= document.getElementById("healthStatus").value;
        let income= Number(document.getElementById("income").value);
        let payPal= document.getElementById("payPal").value;
        let nationalNo= Number(document.getElementById("nationalNo").value);
        let password= document.getElementById("password").value;
        let socialStatus= document.getElementById("socialStatus").value;

            let user = {
                'name': name,
                'dob': dob,
                'email': email,
                'expencsies':expencsies,
                'familyCount': familyCount,
                'healthDesc': healthDesc,
                'healthStatus': healthStatus,
                'income': income,
                'payPal': payPal,
                'nationalNo': nationalNo,
                'password': password,
                'socialStatus': socialStatus,
            }
            console.log("userrrrrrs", user)
    
            let signupResult = await inNeedUserSignup(user);
            if(signupResult.status == 200){
                console.log('Sign up response : ',signupResult.data);
                props.setLoginState({
                    token:signupResult.data.token,
                    user:signupResult.data.addedUser,
                    loggedIn:true
                });
                history.push("/");
            }
            console.log('signupResult : ', signupResult);
    }

        return (
            <>

                <div className='' id="user-container">
                    <div className="form-container user-sign-up-container">

                        <form className="user-form" onSubmit={(e)=>{handleSubmitSignup(e)}}>

                            <input id="familyCount" className="user-input-form" name="familyCount" type="text" placeholder="Family Count" />
                            <input id="socialStatus" className="user-input-form" name="socialStatus" type="text" placeholder="Social Status" />
                            <input id="healthStatus" className="user-input-form" name="healthStatus" type="text" placeholder="Health Status" />
                            <input id="healthDesc" className="user-input-form" name="healthDesc" type="text" placeholder="Health Description" />
                            <input id="income" className="user-input-form" name="income" type="number" placeholder="Income" />
                            <input id="expencsies" className="user-input-form" name="expencsies" type="number" placeholder="Expencsies" />

                            <div>
                                <button type='submit' className="user-button">Sign Up</button>
                                <button type='button' className="user-button ghost" id="signIn" onClick={(e)=>{toggleClass(e)}}> Sign In</button>
                            </div>


                        </form>
                    </div>

                    <div className="user-form-container user-sign-in-container">
                        <form className="user-form" onSubmit={(e)=>{handleSubmitLogin(e)}}>

                            <h1 className="user-header-card">Sign in</h1>
                            <input className="user-input-form" name="usernameLogin" type="text" placeholder="Name" />
                            <input className="user-input-form" name="passwordLogin" type="password" placeholder="Password" />

                            <button type='submit' className="user-button">Sign In  </button>
                        </form>

                    </div>


                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">

                            <form className="user-form" onSubmit={(e)=>{handleSubmitSignup(e)}}>


                                <h1 className="user-header-card">Create Account</h1>
                                <p className="user-form-para">To keep connected with us please sign up with your personal info</p>

                                <input id="name" className="user-input-form" name="name" type="text" placeholder="Name" />
                                <input id="email" className="user-input-form" name="email" type="email" placeholder="Email" />
                                <input id="password" className="user-input-form" name="password" type="password" placeholder="Password" />

                                <input id="nationalNo" className="user-input-form" name="nationalNo" type="number" placeholder="National No" />
                                <input id="payPal" className="user-input-form" name="payPal" type="email" placeholder="PayPal Account" />
                                <input id="dob" className="user-input-form" name="dob" type="text" placeholder="Date of Birth" />
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
                                <button className="user-button user-ghost" id="signUp" onClick={(e)=>{toggleClass(e)}}>Sign Up</button>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        );
}
const mapStateToProps = state => (
    {
        // inNeedUsers: state.inNeedUsers.inNeedUsers,
    }
);
const mapDispatchToProps = { setLoginState };
export default connect(mapStateToProps, mapDispatchToProps)(userResgisteration);

