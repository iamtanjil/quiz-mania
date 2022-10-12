import React from 'react';
import './ShowQuestion.css';
const ShowQuestion = ({question}) => {
    const createMarkup = (html) => {
        return {__html: {html}};
      }
    return (
        <div>
            <div className='quiestion-container'>
                <div className="view">
                    
                </div>
            <h4>This is quiestion</h4>
            <div className='ans-container'>
                <div className='ans-btn'>Answer 1</div>
                <div className='ans-btn'>Answer 2</div>
                <div className='ans-btn'>Answer 3</div>
                <div className='ans-btn'>Answer 4</div>
            </div>
        </div>
        </div>
    );
};

export default ShowQuestion;