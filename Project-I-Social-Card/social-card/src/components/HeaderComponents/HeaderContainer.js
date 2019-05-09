import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = props => {
    return (
        <header>
            <ImageThumbnail />
            {/* <HeaderTitle />
            <HeaderContent /> */}
        </header>
    )
}

export default HeaderContainer;