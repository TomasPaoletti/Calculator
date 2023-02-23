import React from 'react'
import './Clear.css'

function Clear({ children, buttonClear }) {
    return (
        <div className='button_clear' onClick={buttonClear}>
            {children}
        </div>
    )
}

export default Clear