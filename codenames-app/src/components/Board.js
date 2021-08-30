import React from 'react';
import Card from 'components/Card';

class Board extends React.Component {

  render() {
    let cards = this.props.words.map((word, index) => {
      return <Card 
        key={index}
        content={word}
      />
    });
    return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(" + this.props.width + ", 1fr)", 
        gridTemplateRows: "auto", 
        columnGap: "5px",
        rowGap: "10px",
        justifyContent: "center",
        width: "70%"}}
    >
      {cards}
    </div>
    );
  }
}

export default Board;