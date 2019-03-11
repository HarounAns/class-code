import React, { Component } from 'react'; 
import './buttonOne.css';

class ButtonOne extends Component {
  constructor(props) {
    super(props);
    this.count = 0;
    this.state = {
      count: 0,
      showBtn: false
    };

    // bind this to our function print statement
    this.printStatement = this.printStatement.bind(this);
    this.showButtons = this.showButtons.bind(this);
  }

  printStatement() {
    console.log("Haroun is the GOAT");
    console.log(this.state.count);
    this.setState({count: this.state.count + 1});
  }

  showButtons() {
    console.log("Making show buttons True");
    this.setState({showBtn: !this.state.showBtn})
  }

  render() {
    const showBtn = this.state.showBtn;
    let buttons;

    if (!showBtn){
      buttons = <button type="button" onClick={this.showButtons} class="btn btn-primary">btn 1</button>
    } 
    else {
      // if showBtn is true, show all 3 buttons
      buttons = <div>
        <button type="button" onClick={this.showButtons} class="btn btn-primary">btn 1</button>
        <button type="button" onClick={this.showButtons} class="btn btn-primary">btn 2</button>
        <button type="button" onClick={this.showButtons} class="btn btn-primary">btn 3</button>
      </div>
    }
    console.log('Izu rendered');


    return (
        <div>
          {buttons}
        </div>
    );
  }
}

export default ButtonOne;
