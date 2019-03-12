import React, { Component } from 'react'; 
import './App.css';
import ButtonOne from './Components/buttonOne/buttonOne';
import FoamoForm from './Components/foamoForm/foamoForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    console.log('App rendered');
    console.log(this.state.date);
    return (
      <div className="App">
        {<header className="App-header">
          {/*  <ButtonOne gayboi="Izu"></ButtonOne> */}
          <FoamoForm> </FoamoForm>
        </header>}
      </div>
    );
  }
}

export default App;
