import React from 'react';

const ProjectInfo = () => {
    // const [details, setDetails] = useState([]);
    // const [projects, setProjects] = useState([]);

    // useEffect(() => {
    //     fetch('projects.json')
    //     .then(res => res.json())
    //     .then(data => setProjects(data))
    // },[])

    // useEffect(() => {
    //     fetch(`details.json/${}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[])
    return (
        <div className='p-20'>
            <h1 className="text-5xl font-bold text-center">Details Information about the Project</h1>
        </div>
    );
};

export default ProjectInfo;