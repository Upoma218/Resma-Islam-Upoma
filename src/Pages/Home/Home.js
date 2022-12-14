import React from 'react';
import logo from '../../Assets/heroImg.png';
import BgImg from '../../Assets/bg.jpg';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
    const handleType = (count) => {
        // access word count number
        console.log(count)
    }
    const handleDone = () => {
        console.log(`Done after 5 loops!`)
    }

    return (
        <div className="hero min-h-screen"style={{ backgroundImage: `url(${BgImg})` }}>
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content flex-col lg:flex-row-reverse lg:px-20 mt-12">
                <img src={logo} className="max-w-sm rounded-lg" alt='' />
                <div className='text-center lg:text-left lg:pr-24'>
                    <h1 className="text-4xl font-semibold mb-4 uppercase">
                        I'm Resma Islam <span className='text-info'>Upoma</span></h1>
                    <h1 className="text-5xl font-bold my-5">
                        A {' '}
                        <span span className='text-info'>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['JUNIOR','WEB', 'DEVELOPER','MERN','STACK','DEVELOPER','FRONT','END','DEVELOPER']}
                                loop={10}
                                cursor
                                cursorStyle='_'
                                typeSpeed={50}
                                deleteSpeed={70}
                                delaySpeed={1000}
                                onLoopDone={handleDone}
                                onType={handleType}
                            />
                        </span>
                    </h1>
                    <h1 className="text-3xl font-semibold uppercase">Jr. Web Developer! </h1>
                    <p className='py-6'>I am Upoma, ready to provide service as a Jr. full stack web developer. According to my interest, I have gained some knowledge and skill in these areas -- React.js, Node.js,, Express.js, JavaScript, REST API, MongoDB, HTML5, CSS3, Bootstrap, Tailwind CSS, Daisy UI. If you are interested, feel free to contact!</p>
                    <div className='mt-5'>
                        <a href="resume.pdf"><button className="btn btn-sm btn-info  mr-3 uppercase">Resume</button></a>
                        <Link to="/contactMe" className="btn btn-sm btn-info btn-outline  uppercase">Contact Me</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;