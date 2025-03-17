import React from 'react';
import { Link } from 'react-router-dom';

const HotJobsCart = ({ job }) => {
    const { _id, title, company, company_logo, description, location, salaryRange } = job;

    return (
        <div className="card bg-base-100 w-96 shadow-sm  border border-md">
            <figure className="px-10 pt-10">
                <img
                    src={company_logo}
                    alt={company}
                    className="rounded-xl w-24 h-24 object-cover"
                />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{title}</h2>
                <p className="text-gray-600">{company} - {location}</p>
                <p>{description.substring(0, 80)}...</p> 
                <p className="text-green-600 font-bold">Salary: {salaryRange?.min} - {salaryRange?.max} BDT</p>
                <div className="card-actions">
                    <Link to={`/jobs/${_id}`}>
                        <button className='btn btn-primary'>Apply Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};


export default HotJobsCart;