import React from 'react';

const ProjectDetails = ({project}) => {
    const {name, details,link} = project;
    return (
        <div className="card bg-base-100 shadow-xl border bottom-2 rounded-2xl">
            <figure className="px-10 pt-10">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="card-actions">
                    <a href={link} target='_blank'><button className="btn btn-primary uppercase mt-5">View Details</button></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;