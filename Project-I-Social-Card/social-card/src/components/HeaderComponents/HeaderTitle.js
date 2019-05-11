import React from 'react';
import HeaderContent from "./HeaderContent";

import './Header.css';

import moment from 'moment';
const time = moment();

const HeaderTitle = props => {
    return (
      <div className="header-box">
        <div className="header-title">
          <h4 className="title-objects">Lambda School</h4>
          <p className="title-objects">@LambdaSchool</p>
          <span className="time-stamp title-objects">
            {time.format("MMM Do ")}
          </span>
        </div>
        <HeaderContent />
      </div>
    );
};

export default HeaderTitle;
