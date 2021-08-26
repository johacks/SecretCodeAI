import React from 'react';
import Board from 'components/Board'

class Game extends React.Component {
  render() {
    return (
    <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
      <Board 
        width={2}
        height={2}
        words={["word 1", "word 2", "palabra 3", "palabron 4"]}
      />
    </div>
    );
  }
}

export default Game;