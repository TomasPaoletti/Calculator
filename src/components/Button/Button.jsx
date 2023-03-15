import React from 'react'
import './Button.css'

const Button = ({ children, buttonValue }) => {

  const operator = value => {
    return isNaN(value) && (value !== '.');
  }

  return (
    <button className={`wrapper_button ${operator(children) ? 'operator' : ''}`.trimEnd()}
      onClick={() => buttonValue(children)}>
      {children}
    </button>
  )
}

export default Button