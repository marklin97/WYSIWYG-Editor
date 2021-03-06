import React, { useState } from 'react'
import {log} from 'my-npm-package-sample'
import 'draft-js-emoji-plugin/lib/plugin.css'
import 'draft-js-image-plugin/lib/plugin.css'
import '../../node_modules/draft-js/dist/Draft.css'
import { EditorState, getDefaultKeyBinding, RichUtils } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import StyleControl from './StyleControl'
import InlineToolbar from './InlineToolbar'
import styleMap from './styleMap'

// import plugins
import createEmojiPlugin from 'draft-js-emoji-plugin'
import createCounterPlugin from 'draft-js-counter-plugin'

// inistiated plugins
const emojiPlugin = createEmojiPlugin()
const counterPlugin = createCounterPlugin()
const { CharCounter } = counterPlugin

const { EmojiSuggestions, EmojiSelect } = emojiPlugin

const MyEditor = () => {
  console.log(log)
  const [editorState, setEditorState] = useState(EditorState.createEmpty())
  const onChange = editorState => {
    setEditorState(editorState)
  }
  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    if (newState) {
      setEditorState(newState)
      return 'handled'
    }
    return 'not-handled'
  }

  const toggleInlineStyle = inlineStyle => {
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle))
  }
  const toggleBlockStyle = blockStyle => {
    onChange(RichUtils.toggleBlockType(editorState, blockStyle))
  }

  return (
    <div>
      <div className='MyEditor-container' id='container'>
        <div className='MyEditor-toolbar'>
          <StyleControl
            editorState={editorState}
            onToggleInline={toggleInlineStyle}
            onToggleBlock={toggleBlockStyle}
          />
        </div>
        <InlineToolbar
          editorState={editorState}
          onToggleInline={toggleInlineStyle}
        />
        <Editor
          editorState={editorState}
          onChange={onChange}
          customStyleMap={styleMap}
          handleKeyCommand={handleKeyCommand}
          plugins={[emojiPlugin, counterPlugin]}
        />

        <EmojiSuggestions />
      </div>

      <div className='MyEditor-bottomToolbar'>
        <EmojiSelect />
        <div className='MyEditor-wordCounter'>
          <span>Word Count: </span>
          <CharCounter editorState={editorState} limit={200} />
        </div>
      </div>
    </div>
  )
}

export default MyEditor
