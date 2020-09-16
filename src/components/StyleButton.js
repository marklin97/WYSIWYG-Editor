import React from 'react'
import './RichText.css'
import 'element-theme-default'
import { Button } from 'rsuite'
// import default style
import 'rsuite/dist/styles/rsuite-default.css'

const StyleButton = ({ label, onToggle, style }) => {
  const handleClick = e => {
    e.preventDefault()
    onToggle(style)
  }
  return (
    <div style={{ display: 'inline', marginLeft: '4px' }}>
      <Button appearance='subtle' onClick={handleClick}>
        {label}
      </Button>
    </div>
  )
}

export default StyleButton
