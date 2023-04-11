import React, { useState } from 'react'
import useRandomColor from '../hooks/useRandomColor'

export const AddCategory = ({ onNewCategori }) => {

  const [inputValue, setInputValue] = useState('')
  const {color} = useRandomColor()
  const onInputChange = () => {
    setInputValue(event.target.value)
  }

  const onSubmit = () => {
    event.preventDefault()
    if( inputValue.trim().length <= 1) return
    setInputValue('')
    onNewCategori( inputValue.trim() )
  }

  return (
    <form onSubmit={ (event) => onSubmit(event)}>
      <input
        type="text"
        placeholder='Buscar gifs'
        value={inputValue}
        onChange={onInputChange}
        style={{border: `2px solid ${color}`}}/>
    </form>
  )
}
