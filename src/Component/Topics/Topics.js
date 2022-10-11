import React from 'react';
import { Link } from 'react-router-dom';
import './Topics.css';

const Topics = ({topics}) => {
    return (
        <div>
            <div className='topics'>
                <img src={topics.logo} alt="" />
            <div className="topics-container">
                <h3>{topics.name}</h3>
                <Link to='/'>Start Quiz</Link>
            </div>
            </div>
        </div>
    );
};

export default Topics;