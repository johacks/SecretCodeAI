import React from 'react';

class Board extends React.Component {
  
  render() {
    return (
    <div
      style={{
        display: "grid", 
        gridTemplateColumns: "100px 100px 100px", 
        gridTemplateRows: "auto", 
        columnGap: "10px",
        rowGap: "15px",
        justifyContent: "center",
        width: "fit-content"}}
    >
      <div>
        CONTENIDO
      </div>
      <div>
        CONTENIDO
      </div>
      <div>
        CONTENIDO
      </div>
      <div>
        CONTENIDO
      </div>
      <div>
        CONTENIDO
      </div>
      <div>
        CONTENIDO
      </div>
    </div>
    );
  }
}

export default Board;