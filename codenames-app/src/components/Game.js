import React from 'react';
import Board from 'components/Board'

class Game extends React.Component {
  render() {
    return (
    <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
      <Board 
        width={4}
        words={["word1", "word2", "palabra3", "palabron4",
                "word1", "word2", "palabra3", "palabron4",
                "word1", "word2", "palabra3", "palabron4",
                "word1", "word2", "palabra3", "palabron4",
                ]}
      />
    </div>
    );
  }
}

export default Game;