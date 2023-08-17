import React from 'react';
import './Button.css'

const Button = ({handleClick, children}) => {
  return (
    <button className='reusable-button' onClick={handleClick}>
        {children}
    </button>
  )
}

export default React.memo(Button)
