import React from 'react';
import './Card.css';
import CardContent from './CardContent';


const CardBanner = props => {
    return (

        <div className="banner-box">
        <a href="https://reactjs.org">

        <img className="banner-img" src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"></img>
        </a>
        <CardContent />
        </div>
        
    )
}

export default CardBanner;