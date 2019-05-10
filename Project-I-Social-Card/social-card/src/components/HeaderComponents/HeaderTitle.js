import React from 'react';
import HeaderContent from "./HeaderContent";

import './Header.css';

import moment from 'moment';
const time = moment();

const HeaderTitle = props => {
    return (
      <div className="header-box">
        <div className="header-title">
          Lambda School
          <p>@LambdaSchool</p>
          <span className="time-stamp">{time.format("MMM Do ")}</span>
        </div>
        <HeaderContent />
      </div>
    );
};

export default HeaderTitle;
