import * as React from 'react'
import EmojiPicker from './emojiPicker'
import StickerPicker from './stickerPicker'
import InputWithDropdownExample from './inputWithDropdown'

export default () => (
  <div style={{ display: 'flex', flexDirection: 'column', width: '180px', padding: '20px' }}>
    <span>Emojii popup:</span>
    <EmojiPicker />
    <br />
    <span>Sticker popup:</span>
    <StickerPicker />
    <br />
    <span>Input with dropdown:</span>
    <InputWithDropdownExample />
  </div>
)
