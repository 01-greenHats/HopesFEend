import React from 'react';
import { connect } from 'react-redux';
import './header.scss'
import Logo from './logo.png';
import { Link } from "react-router-dom";
import { If,Then,Else } from '../if';


function Header(props) {

  return (
    <header>
      <div id='cssmenu'>
      <img src={Logo} class='img'></img>
        <ul>
          <li class='active'><Link to='/'>Home</Link></li>
          <li class='active'><Link to='/in_need_users'>Donate</Link></li>
          <If condition={props.loggedIn &&  props.userType == 'users'}>
            <Then>
          <li class='active'><Link to='/personal_profile'>Profile</Link></li>
            </Then>
          </If>
          <If condition={!props.loggedIn}>
            <Then>
          <li class='active'><Link to='/userForm'>LogIn/SignUp</Link></li>
            </Then>
          </If>
          <If condition={!props.loggedIn}>
            <Then>
          <li class='active'><Link to='/login-signup-donor'>LogIn/SignUp As Donor</Link></li>
            </Then>
          </If>
          <If condition={props.loggedIn &&  props.userType == 'donors'}>
            <Then>
            <li class='active'><Link to='/about-us'>My List</Link></li>
            </Then>
          </If>
          <li class='active'><Link to='/about-us'>About us</Link></li>
        </ul>
      </div>
    </header>
    
  );
}
const mapStateToProps = state => (
  {
      userType: state.auth.user.userType,
      loggedIn: state.auth.loggedIn
  }
);
// const mapDispatchToProps = { checkIsLogedIn };
export default connect(mapStateToProps)(Header);