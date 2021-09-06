import { Component, createRef } from 'react';
import 'styles/Card.css'

const WIDTH_HEIGHT_RATIO = 2.41;

class Card extends Component {

  constructor(props) {
    super(props);
    this.component = createRef();
    this.state = {
      height: "30px",
    }
  }

  updateHeight() {
    let currWidth = this.component.current ? this.component.current.offsetWidth : 50;
    this.setState({
      height: currWidth / WIDTH_HEIGHT_RATIO + "px" 
    });
  }

  componentDidMount() {
    this.updateHeight();
    window.addEventListener('resize', () => this.updateHeight());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.updateHeight());
  }

  render() {
    return (
      <div
        ref={this.component}
        style={{ height: this.state.height }}
        className="Card"

      >
        <h2>{this.props.content}</h2>
      </div>
    );
  }
}

export default Card;