import React from 'react';
import { connect } from 'react-redux';
import cookie from 'react-cookies';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './header.scss'
import Logo from './logo.png';
import { Link } from "react-router-dom";
import { If, Then, Else } from '../if';


function Header(props) {


function handleLogout() {
  console.log('Removing Cookies');
  cookie.remove('auth', { path: '/' })
}
  return (


    <header>
      <nav className="nav">
        <div className="div-logo">
        <img src={Logo} className="logo-img "></img>
        </div>
        

        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <ul className="nav-list">
        
          <a className="a-header"><Link to='/'><li>Home</li></Link></a>
          <a className="donate" ><Link to='/in_need_users'><li>Donate</li></Link></a>
          <a className="a-header" ><Link to='/posts'><li>Posts</li></Link></a>
          <If condition={props.loggedIn && props.userType == 'users'}>
            <Then>


              <a className="a-header"><Link to='/personal_profile'><li>Profile</li></Link></a>

            </Then>

          </If>
          <If condition={!props.loggedIn}>
            <Then>


              <a className="a-header"><Link to='/userForm'><li>Sign up </li></Link></a>

            </Then>
          </If>
          <If condition={!props.loggedIn}>
            <Then>


              <a className="a-header"><Link to='/login-signup-donor'><li>Donor sign up </li></Link></a>

            </Then>
          </If>
          <If condition={props.loggedIn && props.userType == 'donors'}>
            <Then>



              <a className="a-header"><Link to='/donor-fav-list'><li>My List</li></Link></a>

            </Then>
          </If>

          <a className="a-header"><Link to='/about-us'><li>About Us</li></Link></a>
                    <If condition={props.loggedIn}>
            <Then>


              <a className="a-header Logout" href="/"><li className="Logout" onClick={()=>{handleLogout()}}><ExitToAppIcon style={{fill: "#49111C",fontSize:"2.5em"}}/></li></a>
            </Then>
          </If>
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
      <img src={Logo} className='img'></img>
        <ul>
          <li className='active'><Link to='/'>Home</Link></li>
          <li className='active'><Link to='/in_need_users'>Donate</Link></li>
          <If condition={props.loggedIn &&  props.userType == 'users'}>
            <Then>
          <li className='active'><Link to='/personal_profile'>Profile</Link></li>
            </Then>
          </If>
          <If condition={!props.loggedIn}>
            <Then>
          <li className='active'><Link to='/userForm'>LogIn/SignUp</Link></li>
            </Then>
          </If>
          <If condition={!props.loggedIn}>
            <Then>
          <li className='active'><Link to='/login-signup-donor'>LogIn/SignUp As Donor</Link></li>
            </Then>
          </If>
          <If condition={props.loggedIn &&  props.userType == 'donors'}>
            <Then>
            <li className='active'><Link to='/fav-list'>My List</Link></li>
            </Then>
          </If>
          <li className='active'><Link to='/about-us'>About us</Link></li>
        </ul>
      </div>
    </header> */}
