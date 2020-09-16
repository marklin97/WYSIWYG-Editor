import React from 'react'
import { SelectPicker } from 'rsuite'
const fontFamily = [
  {
    label: <span style={{ fontFamily: 'Arial' }}>Arial</span>,
    value: 'Arial'
  },
  {
    label: <span style={{ fontFamily: 'Helvetica' }}>Helvetica</span>,
    value: 'Helvetica'
  },
  {
    label: <span style={{ fontFamily: 'Georgia' }}>Georgia</span>,
    value: 'Georgia'
  },
  {
    label: <span style={{ fontFamily: 'Verdana' }}>Verdana</span>,
    value: 'Verdana'
  },
  {
    label: <span style={{ fontFamily: 'sans-serif' }}>Sans Serif</span>,
    value: 'SansSerif'
  }
]
const FontStyleSelection = ({ onToggle }) => {
  const handleChange = value => {
    onToggle(value)
  }
  return (
    <div style={{ display: 'inline', marginLeft: '4px' }}>
      <SelectPicker
        data={fontFamily}
        appearance='default'
        placeholder='Georgia'
        searchable={false}
        cleanable={false}
        onChange={handleChange}
        style={{ width: 150 }}
      />
    </div>
  )
}

export default FontStyleSelection
