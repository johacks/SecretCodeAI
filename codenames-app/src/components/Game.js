import React from 'react';
import Board from 'components/Board'

class Game extends React.Component {
  render() {
    return (
    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap"}}>
      <Board 
        width={5}
        words={["word1", "word2", "palabra3", "palabron4", "palabron5",
                "word1", "word2", "palabra3", "palabron4", "palabron5",
                "word1", "word2", "palabra3", "palabron4", "palabron5",
                "word1", "word2", "palabra3", "palabron4", "palabron5",
                ]}
      />
      {/* <div style={{minWidth: "40%", maxWidth: "80%", height: "300px", backgroundColor: "pink"}}>
        AQUI VA LA INFORMACION SOBRE EL ESTADO DEL JUEGO
      </div> */}
    </div>
    );
  }
}

export default Game;