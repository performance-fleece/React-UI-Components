import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = props => {
    return (
      <header>
        <div className="header-img">
          <ImageThumbnail />
        </div>
        <div className="header-content">
          <HeaderTitle />
        </div>
      </header>
    );
}

export default HeaderContainer;