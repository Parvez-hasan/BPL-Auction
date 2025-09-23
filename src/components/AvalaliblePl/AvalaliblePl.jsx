import React from 'react'
import { use } from 'react'

export const AvalaliblePl = ({playerPromise}) => {
  const playerData = use(playerPromise)
  console.log(playerData);
  

  return (
    <div>AvalaliblePl</div>
  )
}
