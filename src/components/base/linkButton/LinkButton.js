import React from 'react'
import {Link} from 'react-router-dom'

const LinkButton = ({text, style, navigateTo, className}) => {
  return (
    <Link 
      to={navigateTo} 
      style={style}
      className={className}
    >
        {text}
    </Link>
  )
}

export default LinkButton