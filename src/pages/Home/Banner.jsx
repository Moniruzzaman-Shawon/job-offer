import React from 'react';
import {  easeOut, motion } from 'framer-motion';
import team1 from '../../assets/team/team1.jpg';
import team2 from '../../assets/team/team2.jpg';
import team3 from '../../assets/team/team3.jpg';


const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-96 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        src={team1}
                        animate = {{y:[0,30,0],x:[0,40,0]}}
                        transition={{duration: 20, repeat: Infinity}}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] 
                         border-b-4 border-l-4 border-blue-400 shadow-2xl " />
                    <motion.img
                        src={team2}
                        animate = {{x:[150,120,150],y:[10,10,10]}}
                        transition={{duration: 20, repeat: Infinity}}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] 
                         border-b-4 border-l-4 border-blue-400 shadow-2xl " />
                    <motion.img
                        src={team3}
                        animate = {{y:[30,10,30],x:[0,20,0]}}
                        transition={{duration: 20, repeat: Infinity}}
                        className="max-w-sm w-64 rounded-t-[40px] rounded-br-[40px] 
                         border-b-4 border-l-4 border-blue-400 shadow-2xl " />
                </div>
                <div className='flex-1'>
                    <motion.h1
                        animate={{ x: 50 }}
                        transition={{ duration: 3, delay: 1, ease: easeOut, repeat: Infinity }}
                        className="text-5xl font-bold">Latest 
                        <motion.span
                        animate ={{color: ['#FF6600','#FFD700']}}
                        transition={{duration: 3.5, repeat: Infinity}}
                        >Jobs </motion.span>
                          For You!</motion.h1>
                    <p className="py-6">

                        Unlock exclusive job opportunities and land your dream job effortlessly.
                        Connect with top employers and get interview calls faster. Sign up now and take the next step in your career!
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;