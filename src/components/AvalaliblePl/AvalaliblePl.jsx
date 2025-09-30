import React from 'react'
import { use } from 'react'
import { FaFontAwesome } from "react-icons/fa6";

export const AvalaliblePl = ({ playerPromise }) => {
  const playerData = use(playerPromise)
  console.log(playerData);


  return (
    <div className='container mx-auto mt-2 grid grid-cols-1 md:grid-cols-3 gap-3 p-3'>

      {
        playerData.map(player => <div className="card bg-base-100 w-96 shadow-sm p-4 ">
          <figure>
            <img className='w-auto h-auto object-cover'
              src={player.image}
              alt="" />
          </figure>
          <div className="mt-3 border-b-2 border-gray-400 pb-2">
            <h2 className="card-title">{player.player}</h2>
            <div className='flex justify-between mt-2'>
              <div className='flex items-center'>
                <FaFontAwesome></FaFontAwesome>
                <span className='ml-2 font-semibold'>{player.country}</span>
              </div>

              <button className='btn'>{player.role}</button>
            </div>

          </div>
          <div className='flex justify-between py-2'>
            <span className='font-semibold'>Rating</span>
            <span className='font-semibold'>{player.rating}</span>
          </div>
          <div className='flex justify-between py-1'>
            <span>Left-Hand-Bat</span>
            <span>Left-Hand-Bat</span>
          </div>
          <div className="card-actions justify-between items-center">
            < span className='font-semibold'>Price: ${player.price}</span>
            <button className="btn ">Choose Player</button>
          </div>
        </div>)
      }

    </div>
  )
}
