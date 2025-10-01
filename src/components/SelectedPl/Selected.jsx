import React from 'react'
import SelectedPlCart from '../SelectedPlCart/SelectedPlCart';

export const Selected = ({ purchansePl }) => {
  console.log(purchansePl);

  return (
    <div className='container mx-auto p-6'>

      {
        purchansePl.map(players => <SelectedPlCart players={players}></SelectedPlCart>)
      }

    </div>
  )
}
