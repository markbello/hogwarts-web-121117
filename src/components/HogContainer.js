import React from 'react'
import HogList from './HogList.js'
import HogFilters from './HogFilters'
import hogs from '../porkers_data.js'



class HogContainer extends React.Component {

  state = {
    hogs: hogs,
    filterGreased: false
  }
  
  sortHogs = (event) => {
    console.log(event.target)
  }
  
  toggleGreasedFilter = () => {
    if (this.state.filterGreased){
      this.setState((prevState) => {return {filterGreased: !prevState.filterGreased, hogs: hogs}})
      } else {
      let filteredHogs = hogs.filter(hog => hog.greased === true)
      this.setState((prevState) => {return {filterGreased: !prevState.filterGreased, hogs: filteredHogs}})
    }
  }
  
  generateImageUrl = (hogName) => {
    const lowerCaseHogName = hogName.toLowerCase()
    const hogNameArray = lowerCaseHogName.split(' ')
    const formattedName = hogNameArray.join('_')
    return `../hog-imgs/${formattedName}.jpg`
  }

  render() {
    return (
      <div>
        <HogFilters toggleGreasedFilter={this.toggleGreasedFilter}
        filterGreased={this.state.filterGreased}
        sortHogs={this.sortHogs}/>
        <HogList hogs={this.state.hogs} imageUrl={this.generateImageUrl}
        />
      </div>
    );
  }
}

export default HogContainer
