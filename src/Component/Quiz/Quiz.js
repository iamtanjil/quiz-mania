import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ShowQuestion from '../ShowQuestion/ShowQuestion';

const Quiz = () => {
    const quiz = useLoaderData();
    const questions = quiz.data.questions;
    return (
        <div>
           {
            questions.map(question => <ShowQuestion
                 key={question.id}
                 question={question}
                 ></ShowQuestion>)
           }
        </div>
    );
};

export default Quiz;