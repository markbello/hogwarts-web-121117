import React from 'react'
import { Grid } from 'semantic-ui-react'
import HogItem from './HogItem'

const HogList = (props) => {
  return (
    <Grid stackable centered columns={4}>
      {props.hogs.map((hog, idx) => <HogItem hog={ hog } key={idx} imageUrl={props.imageUrl(hog.name)} />)}
    </Grid>
  )
}

export default HogList
