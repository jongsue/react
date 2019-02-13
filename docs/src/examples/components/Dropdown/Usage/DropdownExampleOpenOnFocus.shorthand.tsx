import * as React from 'react'
import { Dropdown } from '@stardust-ui/react'

const inputItems = [
  'Bruce Wayne',
  'Natasha Romanoff',
  'Steven Strange',
  'Alfred Pennyworth',
  `Scarlett O'Hara`,
  'Imperator Furiosa',
  'Peter Parker',
  'Selina Kyle',
]

const DropdownExampleOpenOnFocus = () => (
  <>
    <Dropdown openOnFocus items={inputItems} placeholder="I open on focus" />
    <br />
    <Dropdown items={inputItems} placeholder="I do not open on focus" />
  </>
)

export default DropdownExampleOpenOnFocus
