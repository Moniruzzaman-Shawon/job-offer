import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyApplications = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:4000/job-application?email=${user.email}`)
            .then(res => res.json())
            .then(data => {

                setJobs(data)
            })

    }, [user.email])
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mb-8 text-white-800 bg-gradient-to-r from-grey-400 to-slate-400 text-white py-4 rounded-lg shadow-lg">
                My Applications: {jobs.length}
            </h2>

            <div className="overflow-x-auto">
                <table className="table mb-16">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map(job =>
                                <tr key={job._id}>
                                    <th>
                                        
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={job.company_logo}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{job.title}</div>
                                                <div className="text-sm opacity-50">{job.location}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {job.category}
                                        <br />
                                        <span className="badge badge-ghost badge-sm"></span>
                                    </td>
                                    <td></td>
                                    <th>
                                        
                                    </th>
                                </tr>



                            )

                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyApplications;