import React from 'react'
import {Link} from 'react-router-dom'

const LinkButton = ({text, style, navigateTo}) => {
  return (
    <Link to={navigateTo} style={style}>
        {text}
    </Link>
  )
}

export default LinkButton