import React from 'react'

const Input = ({type, id, name, onChange}) => {
  return (
    <input 
      type={type} 
      id={id} 
      name={name} 
      onChange={onChange} 
    />
  )
}

export default Input