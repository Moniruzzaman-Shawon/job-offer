import React, { useEffect, useState } from 'react';
import HotJobsCart from '../Home/HotJobsCart';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);



    useEffect(() => {
        fetch('http://localhost:4000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, []);

    return (
        <div className="p-5 my-16">
            <h2 className="text-4xl font-bold text-center mb-5"> 📄 All Jobs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.slice(0, 20).map(job => (
                    <HotJobsCart key={job._id} job={job} />
                ))}
            </div>
            
        </div>
    );
};

export default Jobs;