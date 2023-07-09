import React from 'react';
import Navigation from '../Navbar/Navbar.js';
import Footer from '../Footer/Footer.js'
import './Layout.scss';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <Navigation />
      </header>
      <section className='content_section'>
        <Outlet />
      </section>
      <div>
        <Footer />
      </div>

    </div>
  );
};

export default Layout;
