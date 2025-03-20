import React from 'react';

const AddJob = () => {
    return (
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
                {/* Job Title */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Job-Title</span>
                    </label>
                    <input type="text" name='title' placeholder="Job Title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
};

export default AddJob;