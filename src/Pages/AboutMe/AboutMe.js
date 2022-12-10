import React from 'react';
import LogoHtml from '../../Assets/html.png';
import LogoReact from '../../Assets/reactLogo.png';
import LogoCss from '../../Assets/css.png';
import LogoBootstrap from '../../Assets/bootstart.png';
import LogoGitHub from '../../Assets/github.png';
import LogoJS from '../../Assets/JS logo.png';

const AboutMe = () => {
    return (
        <div className='p-20 bg-base-200'>
            <h1 className="text-5xl font-bold text-center">About Me</h1>
            <p className='text-center py-12 lg:px-36'>I am new candidate in job sector. Coding is my passion and According to my interest, I have gained some knowledge and skill in these on coding -- React.js, Node.js,, Express.js, JavaScript, REST API, MongoDB, HTML5, CSS3, Bootstrap, Tailwind CSS, Daisy UI. If you are interested, feel free to contact!</p>
            <h1 className="text-3xl font-bold my-3 text-center">Skills</h1>
            <div className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-3 rounded mt-24 lg:px-32 md:px-32'>
                <img src={LogoHtml} alt="" className='w-32 h-32 bg-zinc-300 p-6 rounded'/>
                <img src={LogoReact} alt="" className='w-32 h-32 bg-zinc-300 p-6 rounded'/>
                <img src={LogoCss} alt="" className='w-32 h-32 bg-zinc-300 p-6 rounded'/>
                <img src={LogoBootstrap} alt="" className='w-32 h-32 bg-zinc-300 p-6 rounded'/>
                <img src={LogoGitHub} alt="" className='w-32 h-32 bg-zinc-300 p-6 rounded'/>
                <img src={LogoJS} alt="" className='w-32 h-32 bg-zinc-300 p-6 rounded'/>
            </div>
            
        </div>
    );
};

export default AboutMe;