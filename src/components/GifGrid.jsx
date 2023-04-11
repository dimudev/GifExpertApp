import React, { useEffect, useState } from 'react'
import GifItem from './GifItem'
import useFetchGifs from '../hooks/useFetchGifs'
import useRandomColor from '../hooks/useRandomColor'

export const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs(category)
  const {color} = useRandomColor()

  return (
    <>
      <h3 style={{color:color}} >{category}</h3>
      {
        isLoading && ( <h2 style={{color: 'white'}} >Cargando...</h2> )
      }
      <div className='card-grid' >
        {
          images.map((image) => (
            <GifItem
              key={image.id}
              {...image}
            />
          ))
        }
      </div>
    </>
  )
}
