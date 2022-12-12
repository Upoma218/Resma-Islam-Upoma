import React from 'react';
import LogoHtml from '../../Assets/html.png';
import LogoReact from '../../Assets/reactLogo.png';
import LogoCss from '../../Assets/css.png';
import LogoGitHub from '../../Assets/github.png';

const Blogs = () => {
    return (
        <div className='px-20 mb-12'>
            <h1 className="text-5xl font-semibold text-center text-info uppercase">Blogs</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8  rounded mt-16'>
                <div className="card bg-base-100 shadow-xl image-full mb-12 h-60">
                    <figure><img src={LogoHtml} alt="" className='h-40' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">HTML</h2>
                        <p>HTML stands for HyperText Markup Language. It is a standard markup language for web page creation. It allows the creation and structure of sections, paragraphs, and links using HTML elements (the building blocks of a web page) such as tags and attributes.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl image-full mb-12 h-60">
                    <figure><img src={LogoReact} alt="" className='h-40' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">React JS</h2>
                        <p>The React.js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl image-full mb-12 h-60">
                    <figure><img src={LogoCss} alt="" className='h-40' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">CSS</h2>
                        <p>CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once. External stylesheets are stored in CSS files.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl image-full mb-12 h-60">
                    <figure><img src={LogoGitHub} alt="" className='h-40' /></figure>
                    <div className="card-body">
                        <h2 className="card-title">GitHub</h2>
                        <p>GitHub, Inc. is an Internet hosting service for software development and version control using Git. It provides the distributed version control of Git plus access control, bug tracking, software feature requests, task management, continuous integration, and wikis for every project.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;