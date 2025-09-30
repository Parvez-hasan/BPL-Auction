import React from 'react'
import { use } from 'react'

import { PlayerCart } from '../playerCart/PlayerCart';

export const AvalaliblePl = ({ playerPromise,avalalibleBalence, setAvalalibleBalence }) => {
  const playerData = use(playerPromise)
  console.log(playerData);


  return (
    <div className='container mx-auto mt-2 grid grid-cols-1 md:grid-cols-3 gap-3 p-3'>

      {
        playerData.map(player => <PlayerCart player={player}
          avalalibleBalence={avalalibleBalence} 
          setAvalalibleBalence={setAvalalibleBalence}></PlayerCart> )
      }

    </div>
  )
}
