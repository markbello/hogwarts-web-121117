import React from 'react'

import { Button, Label, Form, Select } from 'semantic-ui-react'

const HogFilters = (props) => {
  return (
    <Form>
      <Form.Field inline>
        <Select
        name="selector"
        placeholder="Sort by..."
        options={
          [{text:"Name", value: "Name"},
          ]}
        onChange={props.sortHogs}
        />
      </Form.Field>
      <Form.Field inline>
        <Button
        as="div"
        color={props.filterGreased ? "red" : "green"}
        onClick={props.toggleGreasedFilter}>
          {props.filterGreased ? "Show All Hogs" : "View Only The Greasiest"}
        </Button>
      </Form.Field>
    </Form>
  )
}

export default HogFilters
