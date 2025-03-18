import React from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';


const JobApply = () => {
    const { id } = useParams();
    const { user } = useAuth();
    console.log(id, user);

    const submitJobApplication = e => {
        e.preventDefault();
        const form = e.target;
        const linkedin = form.linkedin.value;
        const github = form.github.value;
        const resume = form.resume.value;


        const jobApplication = {
            job_id: id,
            applicant_email: user.email,
            linkedin,
            github,
            resume
        }
        fetch(`http://localhost:4000/job-application`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        position: "top-middle",
                        icon: "success",
                        title : "Your application has been saved.",
                        showConfirmButton : false,
                        timer : 1500 ,
                    })
                }

            })

    }

    return (

        <div className="min-h-screen bg-gradient-to-r from-gray-900 to-grey-600 flex flex-col justify-center items-center px-6">
            {/* Top Section */}
            <div className="w-full max-w-4xl bg-slate-800 text-center py-12 px-6 rounded-t-2xl shadow-lg">
                <h1 className="text-4xl font-extrabold text-blue-400">Apply For Job!</h1>
                <p className="py-4 text-gray-300">
                    Fill in the details below and take the next step in your career.
                </p>
            </div>

            {/* Bottom Section (Form) */}
            <div className="w-full max-w-4xl bg-slate-800 shadow-lg p-8 rounded-b-2xl">
                <form onSubmit={submitJobApplication} className="space-y-6">
                    <fieldset className="space-y-4">
                        <label className="block text-gray-300 font-medium">LinkedIn</label>
                        <input
                            type="url"
                            name="linkedin"
                            className="input input-bordered w-full p-3 border border-gray-500 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="LinkedIn URL"
                            required
                        />

                        <label className="block text-gray-300 font-medium">GitHub</label>
                        <input
                            type="url"
                            name="github"
                            className="input input-bordered w-full p-3 border border-gray-500 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="GitHub URL"
                            required
                        />

                        <label className="block text-gray-300 font-medium">Resume</label>
                        <input
                            type="url"
                            name="resume"
                            className="input input-bordered w-full p-3 border border-gray-500 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Resume URL"
                            required
                        />

                        <button
                            type="submit"
                            className="btn btn-primary w-full mt-6 text-lg font-semibold py-3 rounded-lg transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white"
                        >
                            Apply Now
                        </button>
                    </fieldset>
                </form>
            </div>
        </div>



    );
};

export default JobApply;