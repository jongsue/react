import * as React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Usage = () => (
  <ExampleSection title="Usage">
    <ComponentExample
      title="Open On Focus"
      description="A dropdown that opens when it is focused on."
      examplePath="components/Dropdown/Usage/DropdownExampleOpenOnFocus"
    />
    <ComponentExample
      title="Render callbacks"
      description="You can customize rendered elements with render callbacks."
      examplePath="components/Dropdown/Usage/DropdownExampleRender"
    />
  </ExampleSection>
)

export default Usage
