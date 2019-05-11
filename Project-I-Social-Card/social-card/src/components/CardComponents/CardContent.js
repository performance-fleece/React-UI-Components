import React from 'react';
import './Card.css';

const CardContent = props => {
    return (
        <a href="https://reactjs.org">
         <div className='content-card'>
            <h4>Get Started with React</h4>
            <p>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
            <a href="https://reactjs.org">reactjs.org</a>
        </div>
        </a>
       
    )

}

export default CardContent;