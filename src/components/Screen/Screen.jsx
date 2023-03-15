import React from 'react'
import './Screen.css'

function Screen({ input }) {
  return (
    <div data-testid="screen" className='wrapper_screen'>
      {input}
    </div>
  )
}

export default Screen