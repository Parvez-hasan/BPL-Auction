import React from 'react';
import img from "..//..//assets/banner_main.png"

const Banner = () => {
    return (
        <div className='container mx-auto '>
            <div className='w-full bg-black h-[400px] grid place-items-center banner-bg object-cover rounded-lg'>
                <div className='max-w-[710px] h-[300px] container p-4 mx-auto flex flex-col justify-center items-center gap-4'>
                   <img className='flex mx-auto w-32 md:w-48 ' src={img} alt="" />
                   <h1 className='text-center text-2xl md:text-3xl font-bold text-white'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
                   <h1 className='text-xl font-bold text-gray-400 flex mx-auto'>Beyond Boundaries Beyond Limits</h1>
                   <button className='flex mx-auto bg-[#E7FE29] hover:bg-yellow-300 font-semibold py-1 px-7 rounded-xl'>Claim Free Credit</button>
                </div>
            </div>  
        </div>
    );
};

export default Banner;