import Button from '@material-ui/core/Button';
import { Component } from 'react';

class Card extends Component {

  render() {
    return (
      <Button variant="contained" color="primary">
        {this.props.content}
      </Button>
    );
  }
}

export default Card;