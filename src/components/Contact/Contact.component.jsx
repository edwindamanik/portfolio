import React from 'react';
import { BsWhatsapp, BsInstagram, BsTelegram } from 'react-icons/bs';

function Contact() {
    return(
        <div className='bg-white py-10'>
            <h1 className='text-2xl text-center font-regular judul fontKhusus tracking-widest lg:text-4xl'>CONTACT ME</h1>
            <div className='py-10 flex justify-center'>
                <div className='flex flex-row items-center'>
                    <a href="https://wa.me/6285262607679" target="_blank" rel="noreferrer noopener" className='text-2xl p-3 border border-gray-800 rounded-full m-5 hover:bg-green-600 hover:text-white'><BsWhatsapp /></a>
                    <a href="https://www.instagram.com/edwin.i.damanik/" target="_blank" rel="noreferrer noopener" className='text-2xl p-3 border border-gray-800 rounded-full m-5 hover:bg-pink-500 hover:text-white'><BsInstagram /></a>
                    <a href="https://t.me/edw_dmnk" target="_blank" rel="noreferrer noopener" className='text-2xl p-3 border border-gray-800 rounded-full m-5 hover:bg-blue-400 hover:text-white'><BsTelegram /></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;