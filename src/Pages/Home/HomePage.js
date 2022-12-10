import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Home from './Home';

const HomePage = () => {
    return (
        <div>
            <Home></Home>
            <AboutMe></AboutMe>
            <Projects></Projects>
        </div>
    );
};

export default HomePage;