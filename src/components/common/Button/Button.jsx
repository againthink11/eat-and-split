import React from 'react'

const Button = ({children, onHandleClick}) => {
  return (
    <button type='button' className='button' onClick={onHandleClick}>{children}</button>
  )
}

export default Button