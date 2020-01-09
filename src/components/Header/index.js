import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../assets/images/user.jpg';
import logo from '../../assets/images/logo.png';

export default function Header() {
  return (
    <header className="main-header">
      <Link to="/" className="logo">
        <img src={logo} alt="" />
      </Link>

      <div className="user-avatar">
        <img src={user} alt="" />
        <span>Adson Souza</span>
      </div>
    </header>
  );
}
