import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const { _id, title, company, company_logo, salaryRange, location, jobType, category, applicationDeadline, responsibilities } = useLoaderData();


    return (
        <div className="max-w-4xl mx-auto shadow-lg rounded-lg p-6 my-10">
            {/* Company Logo */}
            <div className="flex items-center mb-4">
                <img src={company_logo} alt={company} className="w-16 h-16 object-cover rounded-md mr-4" />
                <div>
                    <h2 className="text-2xl font-bold text-white-800">{title}</h2>
                    <p className="text-white-600 text-sm">{company}</p>
                </div>
            </div>

            {/* Job Info */}
            <div className="grid grid-cols-2 gap-4 text-white-700">
                <p><strong>📍 Location:</strong> {location}</p>
                <p><strong>💼 Type:</strong> {jobType}</p>
                <p><strong>🎯 Category:</strong> {category}</p>
                <p><strong>📅 Deadline:</strong> {applicationDeadline}</p>
                <p><strong>💰 Salary:</strong> {salaryRange?.min} - {salaryRange?.max} BDT</p>
            </div>

            {/* Responsibilities */}
            <div className="mt-6">
                <h3 className="text-xl font-semibold text-white-800 mb-2">📌 Responsibilities:</h3>
                <ul className="list-disc list-inside text-white-600 space-y-1">
                    {responsibilities.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>

            {/* Apply Button */}
            <div className="mt-6">
                <Link to={`/jobApply/${_id}`} >
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg">
                        Apply Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default JobDetails;