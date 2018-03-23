import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import './layout.css';
import 'semantic-ui-css/semantic.min.css';

const Layout = ({children}) => {
  return (
    <div className="root">
      <Header />
        <div className="layout-row">
          <div className="layout-sidebar">
            <Sidebar />
          </div>
          <div className="layout-main">
            {children}
          </div>
        </div>
      <Footer />
    </div>
  )
}

export default Layout;