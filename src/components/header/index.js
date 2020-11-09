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
          <li class='active'><a href='/in_need_users'>Donate</a></li>
          <li class='active'><a href='/personal_profile'>Profile</a></li>
          <li class='active'><a href='/userForm'>LogIn</a></li>
          <li class='active'><a href='/userForm'>SignUp</a></li>
          <li class='active'><a href='/about-us'>About us</a></li>
        </ul>
      </div>
    </header>
    
  );
}