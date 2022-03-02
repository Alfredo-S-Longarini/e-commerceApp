import React from 'react'
import FavsCards from '../FavsCards/favsCards'

const FavList = ({products}) => {
  return (
        <div>
            <div className='viewCards'>
                {
                    products.map((prod) => (
                            <FavsCards key={prod.id} prodFav={prod}></FavsCards>
                    ))
    
                }
            </div>
        </div>
  )
}

export default FavList