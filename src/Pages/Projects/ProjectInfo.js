import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import details from '../../Assets/details.json';
import Details from './Details';

const ProjectInfo = () => {
    const info = []
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const data = details;
    data.map(d => {
        if (d.id == id) {
            info.push(d)
        }
    })
    return (
        <div className='mt-24 lg:px-60 '>
            <h1 className="text-5xl font-bold mb-12 text-center">Project Details</h1>
            {
                info?.length && info.map(
                    i =><Details  key={i.id} i={i}></Details>
                )
            }
        </div>
    );
};

export default ProjectInfo;