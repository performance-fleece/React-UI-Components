import React from 'react';
import './Card.css';

const CardContent = props => {
    return (
        <div className='content-card'>
            <h4>Get Started with React</h4>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <a href="https://react.js.org">reactjs.org</a>
        </div>
    )

}

export default CardContent;