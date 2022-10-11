import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topics from '../Topics/Topics';
import './Home.css';

const Home = () => {
    const {data} = useLoaderData();
    return (
        <div className='home'>
            <div className="home-container">
                <img src="quiz.jpg" alt="" />
                <div className="container-text">
                    <h4>Hey Mate Check your Skill</h4>
                    <p>This is a free website here you can check your skill. in which category you are expert in.This a free application we build it for you. just check it out. currently we are working on it if you have any idea about this application let us know.</p>
                </div>
            </div>
            <div className='topic'>
            {
                data.map(topic => <Topics
                    key={topic.id}
                    topics = {topic}
                ></Topics>)
            }
            </div>
        </div>
    );
};

export default Home;