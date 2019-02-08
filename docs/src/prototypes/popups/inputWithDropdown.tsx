import * as React from 'react'
import * as _ from 'lodash'
import keyboardKey from 'keyboard-key'
import { Provider, Box, Dropdown, Input, InputProps } from '@stardust-ui/react'

import { atMentionItems } from './dataMocks'

interface InputWithDropdownState {
  dropdownOpen?: boolean
  inputValue?: React.ReactText
}

class InputWithDropdownExample extends React.Component<{}, InputWithDropdownState> {
  public state: InputWithDropdownState = { dropdownOpen: false, inputValue: '' }

  render() {
    return (
      <Provider
        theme={{
          componentStyles: {
            Input: {
              input: ({ theme: { siteVariables } }) => ({
                height: '44px',
                backgroundColor: siteVariables.white,
              }),
            },
          },
          componentVariables: {
            Input: siteVars => ({
              wrapper: {
                backgroundColor: siteVars.white,
              },
            }),
          },
        }}
      >
        <Box
          styles={({ theme: { siteVariables } }) => ({
            backgroundColor: siteVariables.gray08,
            padding: '10px',
            width: '400px',
          })}
        >
          <Input
            // ref={this.inputRef}
            value={this.state.inputValue}
            placeholder="Press '@' to start mentioning people"
            onKeyDown={this.handleKeyDown}
            onChange={this.handleChange}
          />
          {this.state.dropdownOpen && (
            <Dropdown
              inline
              search
              items={atMentionItems}
              noResultsMessage="We couldn't find any matches."
            />
          )}
        </Box>
      </Provider>
    )
  }

  private handleChange = (e: React.SyntheticEvent, data: InputProps) => {
    this.setState({ inputValue: data.value })
  }

  private handleKeyDown = (e: React.KeyboardEvent) => {
    const code = keyboardKey.getCode(e)
    switch (code) {
      case keyboardKey.AtSign: // @
        this.setState({ dropdownOpen: true })
        break
      case keyboardKey.Escape: // 27
        this.setState({ dropdownOpen: false })
        break
    }
  }
}

export default InputWithDropdownExample
