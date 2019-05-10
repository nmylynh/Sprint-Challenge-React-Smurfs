import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Routes from "./Routes";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then( res => this.setState({smurfs: res.data}) )
      .catch( err => console.log(err) );
  }

  addSmurf = smurf => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then( res => this.setState({smurfs: res.data}) )
      .catch( err => console.log(err) )
  }

  deleteSmurf = id => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then( res => this.setState({smurfs: res.data}) )
      .catch( err => console.log(err) )
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Smurf Village</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Navbar>
        <SmurfForm addSmurf={this.addSmurf} />
        <Smurfs smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf}  />
      </div>
    );
  }
}

export default App;
