import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({to, key, className, children}) => {
  return (
    <Link
        to={to}
        key={key}
        className={className}
    >
        {children}
    </Link>
  )
}

export default Card