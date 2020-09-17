import React from 'react'
import StyleButton from './StyleButton'
import FontSizeSelection from './FontSizeSelection'
import FontStyleSelection from './FontStyleSelection'
import HeadingSelection from './HeadingSelection'
// import FontSizeSelection from './FontSizeSelection'
const InlineStyles = [
  { label: <i className='fas fa-bold'></i>, style: 'BOLD' },
  { label: <i className='fas fa-italic'></i>, style: 'ITALIC' },
  { label: <i className='fas fa-underline'></i>, style: 'UNDERLINE' },
  { label: <i className='fas fa-strikethrough'></i>, style: 'STRIKETHROUGH' },
  { label: <i className='fab fa-codepen'></i>, style: 'CODE' }
]
const BlockStyle = [
  { label: <i className='fas fa-list-ul'></i>, style: 'unordered-list-item' },
  { label: <i className='fas fa-list-ol'></i>, style: 'ordered-list-item' }
]

const StyleControl = ({ editorState, onToggleInline, onToggleBlock }) => {
  const currentStyle = editorState.getCurrentInlineStyle()

  return (
    <div>
      <HeadingSelection onToggle={onToggleInline} />
      {InlineStyles.map(button => (
        <StyleButton
          active={currentStyle.has(button.style)}
          label={button.label}
          key={button.style}
          onToggle={onToggleInline}
          style={button.style}
          isStatic={true}
        />
      ))}
      {BlockStyle.map(button => (
        <StyleButton
          active={currentStyle.has(button.style)}
          label={button.label}
          key={button.style}
          onToggle={onToggleBlock}
          style={button.style}
          isStatic={true}
        />
      ))}
      <FontSizeSelection onToggle={onToggleInline} />
      <FontStyleSelection onToggle={onToggleInline} />
    </div>
  )
}

export default StyleControl
