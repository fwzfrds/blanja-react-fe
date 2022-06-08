import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({to, className, children}) => {
  return (
    <Link
        to={to}
        className={className}
    >
        {children}
    </Link>
  )
}

export default Card