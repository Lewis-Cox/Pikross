import React from 'react';
import './Header.css';
import kirbyImage from './Kirby-PNG-Image.png';
import logoImage from './Logo.png';

function Header() {
  return (
    <div className="header">
      <header>
        <img className="kirby" src={kirbyImage} alt="Kirby" />
        <img className="logo" src={logoImage} alt="Logo"  />
      </header>
    </div>
  );
}

export default Header;
