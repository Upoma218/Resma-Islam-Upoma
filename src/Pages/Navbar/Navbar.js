import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl">Upoma</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="aboutMe">About Me</Link></li>
                    <li><Link to="projects">Projects</Link></li>
                    <li><Link to="contactMe">Contact Me</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;