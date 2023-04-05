import React, { useState } from 'react'

const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = () => {
    console.log(event.target.value)
    setInputValue(event.target.value)
  }

  const onSubmit = () => {
    event.preventDefault()
    if( inputValue.trim().length <= 1) return
    setCategories( categorie => [...categorie, inputValue])
    setInputValue('')
  }

  return (
    <form onSubmit={ (event) => onSubmit(event)}>
      <input
        type="text"
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}

export default AddCategory