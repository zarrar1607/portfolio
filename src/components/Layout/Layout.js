import React from 'react';
import Navigation from '../Navbar/Navbar.js';
import Footer from '../Footer/Footer.js'
import './Layout.scss';
import ContentSection from '../ContentSection/ContentSection.js';
import { Outlet } from 'react-router-dom';


/*const Layout = (props) => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <ContentSection pageComponent = {props.page}/>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
  return(
    <div>
      <header>
          <Navigation />
      </header>

      <ContentSection pageComponent = {props.page}/>
      <Outlet />
      
      <footer>
        <Footer/>
      </footer>
      
    </div>
  );
};*/
const Layout = () => {
  return(
    <div>
      <header>
          <Navigation />
      </header>

      <Outlet />
      
      <footer>
        <Footer/>
      </footer>
      
    </div>
  );
};

export default Layout;
