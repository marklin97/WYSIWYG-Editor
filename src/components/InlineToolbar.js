import React from 'react'
import StyleButton from './StyleButton'
import { getVisibleSelectionRect } from 'draft-js'

const InlineStyles = [
  { label: <i className='fas fa-bold'></i>, style: 'BOLD' },
  { label: <i className='fas fa-italic'></i>, style: 'ITALIC' },
  { label: <i className='fas fa-underline'></i>, style: 'UNDERLINE' }
]
const InlineToolbar = ({ editorState, onToggleInline }) => {
  const selectionState = editorState.getSelection()
  const anchorKey = selectionState.getAnchorKey()
  const currentContent = editorState.getCurrentContent()
  const currentContentBlock = currentContent.getBlockForKey(anchorKey)
  const start = selectionState.getStartOffset()
  const end = selectionState.getEndOffset()
  const selectedText = currentContentBlock.getText().slice(start, end)
  let left
  let right
  let top
  let bottom
  let xCordination
  let yCordination

  const selectionRect = getVisibleSelectionRect(window)
  if (selectionRect) {
    left = selectionRect.left
    right = selectionRect.right
    top = selectionRect.top
    bottom = selectionRect.bottom
    xCordination = (left + right) / 2
    yCordination = (top + bottom) / 2
  }

  if (selectedText !== '') {
    return (
      <div
        style={{
          position: 'absolute',
          left: `${xCordination - 40}px`,
          top: `${yCordination - 40}px`
        }}
      >
        {InlineStyles.map(button => (
          <StyleButton
            label={button.label}
            key={button.style}
            onToggle={onToggleInline}
            style={button.style}
            isStatic={false}
          />
        ))}
      </div>
    )
  } else {
    return <div></div>
  }
}

export default InlineToolbar
