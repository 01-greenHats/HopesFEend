import React from 'react';
import './header.scss'
import Logo from './logo.png';
import { Link } from "react-router-dom";


export default function Header() {

  return (
    <header>
      <div id='cssmenu'>
      <img src={Logo} class='img'></img>
        <ul>
          <li class='active'><Link to='/'>Home</Link></li>
          <li class='active'><Link to='/in_need_users'>Donate</Link></li>
          <li class='active'><Link to='/personal_profile'>Profile</Link></li>
          <li class='active'><Link to='/userForm'>LogIn</Link></li>
          <li class='active'><Link to='/userForm'>SignUp</Link></li>
          <li class='active'><Link to='/about-us'>About us</Link></li>
        </ul>
      </div>
    </header>
    
  );
}