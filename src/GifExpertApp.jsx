import React, { useState } from 'react'
import AddCategory from './components/AddCategory'

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball'])

  return (
    <>
    <h1>GifExpertApp</h1>
    <AddCategory setCategories = { setCategories } />
    <ol>
      {categories.map( (categorie) => <li key={categorie} >{categorie}</li> )}
    </ol>
    </>
  )
}

export default GifExpertApp