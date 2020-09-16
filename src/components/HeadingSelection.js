import React from 'react'
import { SelectPicker } from 'rsuite'
const heading = [
  {
    label: 'Paragrah',
    value: 'paragrah'
  },
  {
    label: 'Heading 1',
    value: 'h1'
  },
  {
    label: 'Heading 2',
    value: 'h2'
  },
  {
    label: 'Heading 3',
    value: 'h3'
  },
  {
    label: 'Heading 4',
    value: 'h4'
  }
]
const HeadingSelection = ({ onToggle }) => {
  const handleChange = value => {
    onToggle(value)
  }
  return (
    <div style={{ display: 'inline', marginLeft: '4px' }}>
      <SelectPicker
        data={heading}
        appearance='default'
        placeholder='Paragrah'
        searchable={false}
        cleanable={false}
        style={{ width: 150 }}
        onChange={handleChange}
      />
    </div>
  )
}

export default HeadingSelection
