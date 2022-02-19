import React, { Component } from "react";

class MeuComponente extends React.Component {


  constructor(props) {
    super(props);

    this.state = { numero: 5 }
    this.adicionarNumero = this.adicionarNumero.bind(this);

    console.log('construtor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedProps');
    // console.log(props);
    // console.log(state);
    return null
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate...');
    console.log('estado atual.', this.state);
    console.log('proximo atual.', nextState);
    return true;
  }

  adicionarNumero() {
    console.log('setstate');
    let numeroAtual = this.state.numero;
    numeroAtual += 1;
    this.setState({ numero: numeroAtual });
  }

  componentDidUpdate() {
    console.log('componentDidUpdate...');
  }

  render() {

    console.log('render...');
    const { titulo } = this.props

    return (
      <div>
        <p>{titulo}</p>
        <p>{this.state.numero}</p>
        <button onClick={this.adicionarNumero}>
          Adicionar numero
        </button>
      </div>
    )
  }
}

export default MeuComponente;