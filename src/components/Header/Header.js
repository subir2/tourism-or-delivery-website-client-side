import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Menu from '../Menu/Menu';
import Tourism from '../Tourism/Tourism';

const Header = () => {
    return (
        <div>
          
          <Banner></Banner>
          <Tourism/>
          <Footer></Footer>
         
        </div>
    );
};

export default Header;