import React from 'react';
import { FaHtml5, FaCss3Alt, FaLaravel, FaReact, FaBootstrap } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTailwindcss } from 'react-icons/si';
import { GrMysql, GrGraphQl } from 'react-icons/gr';

function Skills() {
    return(
        <div className='bg-white pt-10 pb-10'>
            <h1 className='text-2xl text-center font-regular judul fontKhusus tracking-widest lg:text-4xl'>SKILLS</h1>
            <div className='mt-10 flex flex-row whitespace-nowrap overflow-x-auto scrollbar-hide md:justify-center'>
                <a href="html.com" className='m-5 mt-0 mb-0 text-4xl text-center flex flex-col justify-center items-center lg:text-7xl'><FaHtml5 className='text-orange-500' /><span className='text-sm mt-2 teksKet italic'>HTML</span></a>
                <a href="html.com" className='m-5 mt-0 mb-0 text-4xl text-center flex flex-col justify-center items-center lg:text-7xl'><FaCss3Alt className='text-blue-600' /><span className='text-sm mt-2 teksKet italic'>CSS 3</span></a>
                <a href="html.com" className='m-5 mt-0 mb-0 text-4xl text-center flex flex-col justify-center items-center lg:text-7xl'><IoLogoJavascript className='text-yellow-400' /><span className='text-sm mt-2 teksKet italic'>JavaScript</span></a>
                <a href="html.com" className='m-5 mt-0 mb-0 text-4xl text-center flex flex-col justify-center items-center lg:text-7xl'><FaLaravel className='text-red-500' /><span className='text-sm mt-2 teksKet italic'>Laravel</span></a>
                <a href="html.com" className='m-5 mt-0 mb-0 text-4xl text-center flex flex-col justify-center items-center lg:text-7xl'><FaReact className='text-blue-400' /><span className='text-sm mt-2 teksKet italic'>React Js</span></a>
                <a href="html.com" className='m-5 mt-0 mb-0 text-4xl text-center flex flex-col justify-center items-center lg:text-7xl'><FaBootstrap className='text-purple-600' /><span className='text-sm mt-2 teksKet italic'>Bootstrap</span></a>
                <a href="html.com" className='m-5 mt-0 mb-0 text-4xl text-center flex flex-col justify-center items-center lg:text-7xl'><SiTailwindcss className='text-blue-300' /><span className='text-sm mt-2 teksKet italic'>Tailwind CSS</span></a>
                <a href="html.com" className='m-5 mt-0 mb-0 text-4xl text-center flex flex-col justify-center items-center lg:text-7xl'><GrMysql className='text-blue-700' /><span className='text-sm mt-2 teksKet italic'>MySQL</span></a>
                <a href="html.com" className='m-5 mt-0 mb-0 text-4xl text-center flex flex-col justify-center items-center lg:text-7xl'><GrGraphQl className='text-pink-700' /><span className='text-sm mt-2 teksKet italic'>GraphQL</span></a>
            </div>
        </div>
    );
}

export default Skills;