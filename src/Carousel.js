import React from 'react';

class Carousel extends React.Component {
  state = {
    count: 0,
  };
  leftImg = () => {
    if (this.state.count < this.props.imgs.length - 1) {
      this.setState({
        count: this.state.count + 1,
      });
    }
  };
  rightImg = () => {
    if (this.state.count > 0) {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };
  render() {
    return (
      <div>
        <button onClick={this.leftImg}>Left Image</button>
        <img src={this.props.imgs[this.state.count]} />
        <button onClick={this.rightImg}> Right Image</button>
      </div>
    );
  }
}
export default Carousel;
