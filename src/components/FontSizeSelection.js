import React from 'react'
import { SelectPicker } from 'rsuite'
const fontSize = [
  {
    label: '12',
    value: 'fs_12'
  },
  {
    label: '14',
    value: 'fs_14'
  },
  {
    label: '16',
    value: 'fs_16'
  },
  {
    label: '18',
    value: 'fs_18'
  },
  {
    label: '20',
    value: 'fs_20'
  }
]
const FontSizeSelection = ({ onToggle }) => {
  const handleChange = value => {
    onToggle(value)
  }
  return (
    <div style={{ display: 'inline', marginLeft: '4px' }}>
      <SelectPicker
        data={fontSize}
        placeholder='14'
        searchable={false}
        cleanable={false}
        style={{ width: 60 }}
        onChange={handleChange}
      />
    </div>
  )
}

export default FontSizeSelection
