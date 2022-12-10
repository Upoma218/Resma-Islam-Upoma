import React from 'react';

const ProjectDetails = ({project}) => {
    const {img, name, details,link} = project;
    return (
        <div className="card shadow-2xl bg-base-50  rounded-2xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-40" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{details}</p>
                <div className="card-actions">
                    <a href={link} target='_blank'><button className="btn btn-primary btn-sm uppercase mt-5">View Details</button></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;