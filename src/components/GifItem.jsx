import React from 'react'
import useRandomColor from '../hooks/useRandomColor'

const GifItem = ({title, url, id}) => {
  const {color} = useRandomColor()
  return (
    <div  className='card' style={{backgroundColor: color, border: `2px solid${color}`}} >
      <a href={url} target='_blank'  >
      <img  src={url} alt={title} />
      </a>
      
      <p >{title}</p>
    </div>
  )
}

export default GifItem