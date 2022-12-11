import React from 'react';
import { Link } from 'react-router-dom';


const ProjectDetails = ({ project }) => {
    const {id, img, name, details, link, ClientSiteCode, ServerSiteCode } = project;
    return (
        <div className="card shadow-2xl bg-base-50  rounded-2xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="" className="rounded-xl h-40" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div className='text-xs flex'>
                    <a href={link} target='_blank' className='mr-2 link'>Live Site</a>
                    <a href={ClientSiteCode} target='_blank' className='mr-2 link'>Client Site Code</a>
                    {
                        ServerSiteCode &&
                        <a href={ServerSiteCode} target='_blank' className='link'>Server Site Code</a>
                    }
                </div>
                <p>{details}</p>
                <div className="card-actions">
                    <Link to={`/projectInfo/${id}`}><button className='btn  btn-sm glass'>View Details</button></Link>

                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;