import React from 'react'
import { Grid, Card, Header, Image } from 'semantic-ui-react'

class HogItem extends React.Component {

  state = {
    displayDetails: false
  }

  toggleDetails = () => {
    this.setState(prevState => {
      return {displayDetails: !prevState.displayDetails}
    })
  }

  render() {
    return (
      <Card centered={true} onClick={this.toggleDetails}>
        <Image src={this.props.imageUrl} />
        <Card.Content>
          <Card.Header>
          {this.props.hog.name}
          </Card.Header>
        </Card.Content>
        {this.state.displayDetails ?
          <Card.Content extra>
            <Card.Meta>
              <span className='date'>
                Highest Medal Achieved: <strong>{this.props.hog['highest medal achieved']}</strong>
              </span>
            </Card.Meta>
            <Card.Description>
              Specialty: {this.props.hog.specialty}
            </Card.Description>
            <Card.Content extra>
              {this.props.hog.greased ? <em>Greased!</em> : "Non-Slip"}
              </Card.Content>
            </Card.Content>
        : null }
      </Card>
    );
  }
}

export default HogItem
