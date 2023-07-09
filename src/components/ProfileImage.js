import React from 'react';
import logo from '../assests/images/my_image.svg'; // Tell webpack this JS file uses this image
import { Image } from 'react-bootstrap';

function Header() {
  var originalSize = 530;
  const style = {
    boxShadow: '0px 0px 10px rgba(0,0,0,1)',
    borderRadius: '50%' 
  };
  return(
    <Image src={logo} alt="My Profile" style={style} fluid/>
  );
}

export default Header;