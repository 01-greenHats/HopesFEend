import React from 'react';
import { connect } from 'react-redux';
import './header.scss'
import Logo from './logo.png';
import { Link } from "react-router-dom";
import { If, Then, Else } from '../if';


function Header(props) {

  return (


    <header>
      <nav class="nav">
        <div className="div-logo">
        <img src={Logo} class="logo-img "></img>
        </div>
        

        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <i class="fas fa-bars"></i>
        </label>
        <ul class="nav-list">
        
          <a class="a-header"><Link to='/'><li>Home</li></Link></a>
          <a class="donate" ><Link to='/in_need_users'><li>Donate</li></Link></a>
          <a class="a-header" ><Link to='/posts'><li>Posts</li></Link></a>
          <If condition={props.loggedIn && props.userType == 'users'}>
            <Then>


              <a class="a-header"><Link to='/personal_profile'><li>Profile</li></Link></a>

            </Then>

          </If>
          <If condition={!props.loggedIn}>
            <Then>


              <a class="a-header"><Link to='/userForm'><li>Sign up </li></Link></a>

            </Then>
          </If>
          <If condition={!props.loggedIn}>
            <Then>


              <a class="a-header"><Link to='/login-signup-donor'><li>Donor sign up </li></Link></a>

            </Then>
          </If>
          <If condition={props.loggedIn && props.userType == 'donors'}>
            <Then>



              <a class="a-header"><Link to='/donor-fav-list'><li>My List</li></Link></a>

            </Then>
          </If>

          <a class="a-header"><Link to='/about-us'><li>About Us</li></Link></a>
        </ul>
      </nav>

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





{/* <header>
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
            <li class='active'><Link to='/fav-list'>My List</Link></li>
            </Then>
          </If>
          <li class='active'><Link to='/about-us'>About us</Link></li>
        </ul>
      </div>
    </header> */}
