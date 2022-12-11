import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Blogs from '../Blogs/Blogs';
import Projects from '../Projects/Projects';
import Home from './Home';
const HomePage = () => {
   
    return (
        <div>
            <Home></Home>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Blogs></Blogs>
            
        </div>
    );
};

export default HomePage;