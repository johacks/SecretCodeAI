import 'styles/Board.css'
import React from 'react';
import Card from 'components/Card';

const DEFAULT_FONT_SIZE = 16;
const MOBILE_FONT_SIZE = 8;

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.component = React.createRef();
    this.state = {
      fontSize: DEFAULT_FONT_SIZE + "px",
    }
  }

  updateFontSize() {
    return (window.innerHeight < 700 || window.innerWidth < 900)
        ? this.setState((prevState) => ({ ...prevState, fontSize: MOBILE_FONT_SIZE + "px" }))
        : this.setState((prevState) => ({ ...prevState, fontSize: DEFAULT_FONT_SIZE + "px" }));
  }

  componentDidMount() {
    this.updateFontSize();
    window.addEventListener('resize', () => this.updateFontSize());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.updateFontSize());
  }

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
        gridTemplateColumns: "repeat(" + this.props.width + ", minmax(50px, 1fr))",
        fontSize: this.state.fontSize
      }}
      className="Board"
    >
      {cards}
    </div>
    );
  }
}

export default Board;