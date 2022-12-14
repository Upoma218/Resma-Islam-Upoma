import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";     
import { FaFigma } from "react-icons/fa";     
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { DiNodejs } from "react-icons/di";

const AboutMe = () => {
    return (
        <div className='p-20 bg-base-200'>
            <h1 className="text-4xl font-semibold text-center uppercase text-info">About Me</h1>
            <p className='text-center py-8 lg:px-36'>I am new candidate in job sector. Coding is my passion and According to my interest, I have gained some knowledge and skill in these on coding -- React.js, Node.js,, Express.js, JavaScript, REST API, MongoDB, HTML5, CSS3, Bootstrap, Tailwind CSS, Daisy UI. If you are interested, feel free to contact!
                <br />
                <br />
                I also like to work with UI/UX designing. And I enjoy to develop my own UI/UX design. Design, coding is my passion. Though my educational background is totally from a different field, I am enjoying to work a Web Designer And Developer.
            </p>
            <h1 className="text-4xl font-semibold my-12 text-center uppercase text-info">Skills</h1>
            <div className='grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-3 rounded lg:px-32 md:px-32'>
                <FaHtml5 className='w-32 h-32 bg-neutral p-6 mb-3'></FaHtml5>
                <SiCss3 className='w-32 h-32 bg-neutral p-6 mb-3'></SiCss3>
                <FaReact className='w-32 h-32 bg-neutral p-6 mb-3'></FaReact>      
                <DiJavascript1 className='w-32 h-32 bg-neutral p-6 mb-3'></DiJavascript1> 
                <FaBootstrap className='w-32 h-32 bg-neutral p-6 mb-3'></FaBootstrap> 
                <SiTailwindcss className='w-32 h-32 bg-neutral p-6 mb-3'></SiTailwindcss> 
                <SiMongodb className='w-32 h-32 bg-neutral p-6 mb-3'></SiMongodb> 
                <FaGithub className='w-32 h-32 bg-neutral p-6 mb-3'></FaGithub> 
                <DiNodejs className='w-32 h-32 bg-neutral p-6 mb-3'></DiNodejs> 
                <FaFigma className='w-32 h-32 bg-neutral p-6 mb-3'></FaFigma> 
                <SiFirebase className='w-32 h-32 bg-neutral p-6 mb-3'></SiFirebase> 
                <SiVercel className='w-32 h-32 bg-neutral p-6 mb-3'></SiVercel> 
            </div>

        </div>
    );
};

export default AboutMe;