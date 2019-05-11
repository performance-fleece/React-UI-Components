import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = props => {
    return (
      <div className="header-container">
        
        <ImageThumbnail />
        
        <div className="header-content-box">
          <HeaderTitle />
          
        </div>
      </div>


        
      
    );
}

export default HeaderContainer;