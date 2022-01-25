import React from 'react';

function Jumbotron() {
    return(
        <div className='abu pt-20 pb-20 pl-5 pr-5 flex flex-col justify-center items-center'>
            <h1 className='text-white text-lg text-center font-light md:text-2xl'>Welcome to my portfolio website. My name is <b>Edwin Immanuel Damanik</b></h1>
            <p className='text-white text-sm mt-5 font-light italic md:text-base'>" Software Engineering Student "</p>
            <a href="#" className='btnCv mt-8 p-3 rounded text-white text-sm'>Download CV</a>
        </div>
    );
}

export default Jumbotron;