import React, { Component } from 'react';

class SmurfUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  updateSmurf = (event) => {
    event.preventDefault();
    console.log(event);
    this.props.updateSmurf(this.props.id, this.state);

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.updateSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder={this.state.name}
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder={this.state.age}
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder={this.state.height}
            value={this.state.height}
            name="height"
          />
          <button type="submit">Update to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfUpdate;
