import React from 'react'

const Input = ({type, id, name, onChange, placeholder, value, defaultValue}) => {
  return (
    <input 
      type={type} 
      id={id} 
      name={name} 
      onChange={onChange} 
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
    />
  )
}

export default Input