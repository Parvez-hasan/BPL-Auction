import React, { useState } from 'react'
import { FaFontAwesome } from "react-icons/fa6";
import { SiLit } from 'react-icons/si';

export const PlayerCart = ({ player, avalalibleBalence, setAvalalibleBalence }) => {

  const [isSelected, setIsSelected] = useState(false);

  // common function
  const handleSelected = (playerData) => {
    const playerPrice = parseInt(playerData.price.split("USD").join("").split(",").join(""))
    if(avalalibleBalence < playerPrice){
      alert("not enough the coins!!")
      return
    }
    setIsSelected(true)
    setAvalalibleBalence(avalalibleBalence - playerPrice );
  };

  return (

    <div className="card bg-base-100 w-96 shadow-sm p-4 ">
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
        <button disabled={isSelected} onClick={() => {
          handleSelected(player)
        }} className="btn ">{isSelected === true ? "Selected" : "Choose Player"}</button>
      </div>
    </div>

  )
}
