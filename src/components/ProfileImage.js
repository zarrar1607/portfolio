import React from 'react';
import logo from '../assests/images/my_image.svg'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  return <img src={logo} alt="My Profile"/>;
}

export default Header;