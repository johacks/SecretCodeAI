import React from 'react';

class Board extends React.Component {
  
  render() {
    return (
    <div>
      {this.props.height}
      {this.props.width}
      {this.props.words}
    </div>
    );
  }
}

export default Board;