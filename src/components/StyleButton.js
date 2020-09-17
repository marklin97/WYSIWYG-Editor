import React from 'react'
import './RichText.css'
import { Button } from 'rsuite'
// import default style
import 'rsuite/dist/styles/rsuite-default.css'

const StyleButton = ({ label, onToggle, style, isStatic }) => {
  const handleClick = e => {
    e.preventDefault()
    onToggle(style)
  }
  if (isStatic) {
    return (
      <div style={{ display: 'inline', marginLeft: '4px' }}>
        <Button appearance='subtle' onClick={handleClick}>
          {label}
        </Button>
      </div>
    )
  } else {
    return (
      <div
        style={{
          position: 'relative',
          display: 'inline',
          marginLeft: '1px',
          zIndex: '10'
        }}
      >
        <Button
          appearance='primary'
          onClick={handleClick}
          color='cyan'
          size='xs'
        >
          {label}
        </Button>
      </div>
    )
  }
}

export default StyleButton
