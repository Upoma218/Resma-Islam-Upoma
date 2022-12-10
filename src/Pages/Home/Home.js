import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="hero min-h-screen px-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="" className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                <div className='text-center lg:text-left lg:pr-24'>
                    <h1 className="text-2xl font-bold">Hello! I'm</h1>
                    <h1 className="text-5xl font-bold my-3">Resma Islam Upoma</h1>
                    <h1 className="text-3xl font-bold">Jr. Web Developer! </h1>
                    <p className='py-6'>I am Upoma, ready to provide service as a Jr. full stack web developer. According to my interest, I have gained some knowledge and skill in these areas -- React.js, Node.js,, Express.js, JavaScript, REST API, MongoDB, HTML5, CSS3, Bootstrap, Tailwind CSS, Daisy UI. If you are interested, feel free to contact!</p>
                    <div>
                        <a href="resume.pdf"><button className="btn btn-sm btn-primary mr-3 uppercase">Resume</button></a>
                        <Link to="/contactMe" className="btn btn-sm btn-primary uppercase">Contact Me</Link>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;