import React from 'react';
import './header.scss'
import Logo from './logo.png';


export default function Header() {

  return (
    <header>
      <div id='cssmenu'>
      <img src={Logo} class='img' href='/'></img>
        <ul>
          <li class='active'><a href='/'>Home</a></li>
          <li><a href='/in_need_users'>Donate</a></li>
          <li><a href='/personal_profile'>Profile</a></li>
          <li><a href='/loginUser'>LogIn</a></li>
          <li><a href='/signupUser'>SignUp</a></li>
          <li><a href='/about-us'>About us</a></li>
        </ul>
      </div>
    </header>
  );
}