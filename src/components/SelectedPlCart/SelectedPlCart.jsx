import React from 'react';
import { MdDeleteForever } from "react-icons/md";
const SelectedPlCart = ({ players }) => {
    console.log(players);

    return (
        <div className=''>

            <div className='flex justify-between items-center mt-4 p-5 border-2 rounded border-gray-400'>
                <div className='p-2'>
                    <div className='flex '>
                        <img className='w-20 h-auto rounded' src={players.image} alt="" />
                        <div className='ml-3'>
                            <h1 className='text-xl font-semibold'>{players.player}</h1>
                            <h1 className='text-xs'>{players.role}</h1>
                        </div>
                    </div>
                </div>
                <div>
                    <MdDeleteForever className='w-8 h-8'></MdDeleteForever>
                </div>
            </div>
       </div>
    );
};

export default SelectedPlCart;