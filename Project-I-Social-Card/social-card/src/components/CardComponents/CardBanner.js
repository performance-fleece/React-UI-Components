import React from 'react';
import './Card.css';
<<<<<<< HEAD

const CardBanner = props => {
    return (
        <div className="banner-box">
        <img className="banner-img" src="https://tk-assets.lambdaschool.com/fcd75197-7d12-46ec-bc9e-4130f34822fa_reactbackground.png"></img>
        </div>
    )
};
=======
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
>>>>>>> ffd8df2eff3e96d08f0076b80142d32988794c3e

export default CardBanner;