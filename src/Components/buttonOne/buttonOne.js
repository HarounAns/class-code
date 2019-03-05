import React, { Component } from 'react'; 
import './buttonOne.css';

class ButtonOne extends Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.state = {
      count: 0
    };

    // bind this to our function print statement
    this.printStatement = this.printStatement.bind(this);
  }

  printStatement() {
    console.log("Haroun is the GOAT");
    console.log(this.state.count);
    this.setState({count: this.state.count + 1});
  }

  render() {
    console.log('Izu rendered');
    return (
        <div>
            <button type="button" onClick={this.printStatement} class="btn btn-primary">{this.state.count}</button>   
        </div>
    );
  }
}

export default ButtonOne;
