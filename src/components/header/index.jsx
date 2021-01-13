import "./index.scss";
import React from 'react';
import logo_groupe_edouard_denis_blue from '../../assets/img/logo_groupe_edouard_denis_blue.png';

const Header = () => (
  <header className="Headerbackground">
    <img src={logo_groupe_edouard_denis_blue} alt="Groupe Edouard Denis" className="logo" />
  </header>

);

export default Header;
