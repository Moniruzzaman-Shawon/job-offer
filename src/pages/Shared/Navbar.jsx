import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../context/AuthContext/AuthContext';
import logo from '../../assets/jobs-logo.png';

const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext);

    const handleSignOut = () =>{
        signOutUser()
        .then(()=>{
            console.log('Sign out successful');
            
        })
        .catch(error=>{
            console.log(error);
            
        })
    }

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li>
            <details>
                <summary>Choose Career</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
            </details>
        </li>
        <li><NavLink to='/myApplications'>My Applications</NavLink></li>
        <li><NavLink to='/'>Jobs</NavLink></li>
        <li><NavLink to='/addJob'>Add A Job</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img className='w-12' src={logo} alt="" />
                    <h3 className="text-3xl">Job Offer</h3>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <button onClick={handleSignOut} className="btn">Sign out</button>

                    </> : <>
                        <Link to='/register'>Register</Link>
                        <Link to='/signin'>
                            <button className="btn">Sign In</button>
                        </Link>
                    </>
                }

            </div>
        </div>
    );
};

export default Navbar;