import React from 'react';
import { BsGithub } from 'react-icons/bs';

function Navbar() {
    return(
        <div className='p-5 gelap flex flex-row justify-between items-center'>
            <div>
                <p className='fontKhusus text-2xl text-white tracking-widest md:text-3xl'>EDWDMNK</p>
            </div>
            <div>
                <a href="https://github.com/edwindamanik" target="_blank" rel="noreferrer noopener" className='text-white text-xl'><BsGithub className='hover:animate-bounce' /></a>
            </div>
        </div>
    );
}

export default Navbar;