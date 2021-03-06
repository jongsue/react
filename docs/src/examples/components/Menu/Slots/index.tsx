import * as React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Slots = () => (
  <ExampleSection title="Slots">
    <ComponentExample
      title="Content"
      description="A menu can have content."
      examplePath="components/Menu/Slots/MenuExample"
    />
    <ComponentExample
      title="Icon Only"
      description="A menu can have only icons."
      examplePath="components/Menu/Slots/MenuExampleIconOnly"
    />
    <ComponentExample
      title="Icon &amp; content"
      description="A menu can have menu items that are content only, icon only, or content + icon."
      examplePath="components/Menu/Slots/MenuExampleWithIcons"
    />
    <ComponentExample
      title="Divider"
      description="A menu can have divider between some items."
      examplePath="components/Menu/Slots/MenuExampleDivider"
    />
  </ExampleSection>
)

export default Slots
