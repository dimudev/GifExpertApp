import React, { useEffect, useState } from 'react'
import {AddCategory, GifGrid} from './components'
import useRandomColor from './hooks/useRandomColor'
 
const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Fast Food', 'Corea', 'Video Games'])
  const {color} = useRandomColor()

  const onNewCategori = (newCategori) => {
    if (categories.includes(newCategori)) return
    setCategories([newCategori, ...categories])
  }

  return (
    <div style={{backgroundColor:'#252525'}} >
      <h1 style={{color: color }} >¡K Gifs App!</h1>
      <AddCategory
        onNewCategori={(event) => onNewCategori(event)}
      />
      {
        categories.map((categorie) =>
        (
          <GifGrid
            key={categorie}
            category={categorie}
          />
        )
        )
      }
    </div>
  )
}

export default GifExpertApp