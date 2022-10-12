import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast } from 'react-toastify';
import Options from '../Option/Options';
import './ShowQuestion.css';

const ShowQuestion = ({question}) => {
    const options = question.options;
    console.log(options);
    return (
        <div>
            <div className='quiestion-container'>
                <div onClick={()=> toast.success(question.correctAnswer)} className="view">
                    <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                </div>
            <h4 dangerouslySetInnerHTML={{__html: question.question}}></h4>
            <div className='ans-container'>
                {
                    options.map(option => <Options option={option}
                    correctAns={question.correctAnswer}></Options>)
                }
            </div>
        </div>
        </div>
    );
};

export default ShowQuestion;