import React from 'react'
import HogList from './HogList.js'
import hogs from '../porkers_data.js'



class HogContainer extends React.Component {

  state = {
    hogs: hogs
  }

  generateImageUrl = (hogName) => {
    const lowerCaseHogName = hogName.toLowerCase()
    const hogNameArray = lowerCaseHogName.split(' ')
    const formattedName = hogNameArray.join('_')
    return `../hog-imgs/${formattedName}.jpg`
  }

  render() {
    return (
        <HogList hogs={this.state.hogs} imageUrl={this.generateImageUrl}/>
    );
  }
}

export default HogContainer
