import React, { useEffect, useState } from 'react';
import ProjectDetails from './ProjectDetails';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('projects.json')
        .then(res => res.json())
        .then(data => setProjects(data))
    },[])

    return (
        <div className='px-20 mt-24 mb-12'>
            <h1 className="text-4xl font-semibold text-center uppercase text-info">Some Of My Projects</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 rounded mt-16'>
                {
                    projects && 
                    projects.map(project => <ProjectDetails key={projects.id} project={project}></ProjectDetails>)
                }
            </div>
        </div>
    );
};

export default Projects;