import React from 'react';
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
        <div className="hero max-h-screen px-20 my-12">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="" className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div className='text-center lg:text-left lg:pr-24'>
                    <h1 className="text-2xl font-bold my-6">Hello!</h1>
                    <h1 className="text-5xl font-bold my-3">
                        I AM RESMA{' '}
                        <span span className='text-info'>
                            {/* Style will be inherited from the parent element */}
                            <Typewriter
                                words={['ISLAM','UPOMA']}
                                loop={5}
                                cursor
                                cursorStyle=' '
                                typeSpeed={20}
                                deleteSpeed={70}
                                delaySpeed={1000}
                                onLoopDone={handleDone}
                                onType={handleType}
                            />
                        </span>
                    </h1>
                    <h1 className="text-3xl font-semibold">Jr. Web Developer! </h1>
                    <p className='py-6'>I am Upoma, ready to provide service as a Jr. full stack web developer. According to my interest, I have gained some knowledge and skill in these areas -- React.js, Node.js,, Express.js, JavaScript, REST API, MongoDB, HTML5, CSS3, Bootstrap, Tailwind CSS, Daisy UI. If you are interested, feel free to contact!</p>
                    <div>
                        <a href="resume.pdf"><button className="btn btn-sm btn-info  mr-3 uppercase">Resume</button></a>
                        <Link to="/contactMe" className="btn btn-sm btn-info btn-outline  uppercase">Contact Me</Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;