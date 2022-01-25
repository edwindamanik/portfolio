import React from 'react';

function Project() {
    return(
        <div className='abu pt-10 pb-10'>
            <h1 className='text-2xl text-center font-regular text-white fontKhusus tracking-widest lg:text-4xl'>PROJECTS</h1>
            <div className='mt-10 flex p-5 pt-0 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
                <div className='bgProject p-2 rounded m-3 w-fit'>
                    <img src={`https://i.ibb.co/NZG1Zn2/kuwon-Image.png`} alt="KUWON" className='rounded' />
                    <h3 className='fontKhusus text-3xl mt-5'>KUWON</h3>
                    <p className='line-clamp-3 text-justify teksKet text-sm italic mb-3'>Ini merupakan aplikasi berbasis website untuk pembelajaran matematika. Dengan jangka pembelajaran dari siswa atau pelajar smp sampai dengan mahasiswa. Materi matematika yang diberikan merupakan materi terbaru dan mengikuti alur pembelajaran yang diberikan oleh sekolah. Website ini juga dilengkapi dengan soal dan juga papan peringkat untuk raihan point yang diperoleh oleh pelajar melalui soal yang dijawab.</p>
                </div>
                <div className='bgProject p-2 rounded m-3 w-fit'>
                    <img src={`https://i.ibb.co/GMNLr3y/hulu-Clone.png`} alt="KUWON" className='rounded' />
                    <h3 className='fontKhusus text-3xl mt-5'>HULU CLONE 2.0</h3>
                    <p className='line-clamp-3 text-justify teksKet text-sm italic mb-3'>Hulu Clone 2.0 merupakan website yang mengandung sejumlah film dunia dengan kategori tertentu. Film dilengkapi dengan thumbnail, deskripsi, tanggal rilis yang diambil dari TMDB.</p>
                </div>
                <div className='bgProject p-2 rounded m-3 w-fit'>
                    <img src={`https://i.ibb.co/6N0jyCh/keplr.png`} alt="KUWON" className='rounded' />
                    <h3 className='fontKhusus text-3xl mt-5'>KEPLR</h3>
                    <p className='line-clamp-3 text-justify teksKet text-sm italic mb-3'>Keplr merupakan sebuah website penyedia informasi barang barang perabotan rumah tangga dengan harga yang terjangkau untuk keluarga rumah tangga.</p>
                </div>
                <div className='bgProject p-2 rounded m-3 w-fit'>
                    <img src={`https://i.ibb.co/Pzw9HsJ/chatRoom.png`} alt="KUWON" className='rounded' />
                    <h3 className='fontKhusus text-3xl mt-5'>ROOM CHAT</h3>
                    <p className='line-clamp-3 text-justify teksKet text-sm italic mb-3'>Room Chat merupakan sebuah aplikasi berbasis website. Dimana pengguna dapat mengirim pesan kepada pengguna lain. Untuk dapat masuk ke dalam aplikasi, pengguna dapat menggunakan akun google yang diautentikasi ke firebase.</p>
                </div>
            </div>
        </div>
    );
}

export default Project;