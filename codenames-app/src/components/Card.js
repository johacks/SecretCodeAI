import { Component, createRef } from 'react';

class Card extends Component {

  constructor(props) {
    super(props);
    this.component = createRef();
    this.state = {
      height: "30px",
    }
  }

  componentDidMount() {
    this.setState({
      height: this.component.current.offsetWidth * 0.41 + "px" 
    });
  }

  render() {
    return (
      <div ref={this.component}
        style={{
          border: "2px solid black",
          borderRadius: "3px",
          padding: "5px",
          display: "flex",
          justifyContent: "center",
          height: this.state.height,
          flexDirection: "column",
        }}
      >
        {this.props.content}
      </div>
    );
  }
}

export default Card;