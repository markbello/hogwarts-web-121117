import React from 'react'
import { Grid, Card, Header, Image, Popup} from 'semantic-ui-react'

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
      <Grid.Column stretched={false}>
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
                  <div>
                    <Popup trigger={<span>Weight: </span>}> 
                      Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water 
                    </Popup> 
                    <strong>
                      {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
                    </strong>
                  </div>
                  <div>
                    Highest Medal Achieved: <strong>{this.props.hog['highest medal achieved']}</strong>
                  </div>
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
      </Grid.Column>
    );
  }
}

export default HogItem
