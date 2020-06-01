import React, {Component} from 'react';

class HelloWorld extends Component {
  render() {
    return (
      <h1>Welcome to first React App {this.props.name}</h1>
    )
  }
}
export default HelloWorld
