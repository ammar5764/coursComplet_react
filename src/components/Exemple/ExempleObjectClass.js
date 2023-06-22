import React, { Component } from 'react';

class ExempleObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      metier: "Fullstack developper",
      niveau: "en formation"
    };
  }

  handleClickJunior = () => {
    this.setState({ niveau: "Junior" });
  }

  handleClickIntermediaire = () => {
    this.setState({ niveau: "Intermediaire" });
  }

  handleClickSenior = () => {
    this.setState({ niveau: "Senior" });
  }

  render() {
    return (
      <div>
        <h1>Je suis {this.state.metier} {this.state.niveau}</h1>
        <button onClick={this.handleClickJunior}>dans 3 mois je serais</button>
        <button onClick={this.handleClickIntermediaire}>dans 1 an je serais</button>
        <button onClick={this.handleClickSenior}>dans 5 ans je serais</button>
      </div>
    );
  }
}

export default ExempleObject;
