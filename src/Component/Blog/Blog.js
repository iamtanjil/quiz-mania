import React from 'react';
import './Blog.css';
const Blog = () => {
    return (
        <div>
            <div className="blog-container">
                <h2>What is the purpose of react router?</h2>
                <p>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
            </div>
            <div className="blog-container">
                <h2>How does context api works?</h2>
                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className="blog-container">
                <h2>What is useref?</h2>
                <ol type='1'>
                    <li>Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</li>
                    <li>useRef() creates a plain JavaScript object.</li>
                    <li>useRef doesn't notify you when its content changes.</li>
                    <li>useRef returns a mutable ref object</li>
                    <li>The returned object will persist for the full lifetime of the component.</li>
                </ol>
            </div>
        </div>
    );
};

export default Blog;