import React, { Component } from 'react'
import Title from './components/Title'
import { Form } from './components/Form'
import Result from './components/Result'

class App extends Component {
  constructor() {
    super()

    this.state = {
      kmLitroCarro: '',
      precoGasolina: '',
      distancia: '',
      result: false
    }

    this.handleChange = (field) => (e) => {
      this.setState({ [field]: e.target.value})
    }

    this.calculate = (state) => {
      const distancia = this.state.distancia
      const precoGasolina = this.state.precoGasolina
      const kmLitroCarro = this.state.kmLitroCarro

      let mediaConsumo = distancia / kmLitroCarro
      let mediaConsumoFinal = mediaConsumo.toFixed(2)
      
      let precoFinal = precoGasolina * mediaConsumoFinal
      return precoFinal
    }

    this.handleClick = () => {
      this.setState({ result: true })
    }
  }

  render() {
    return (
      <section className="section">
        <div className="columns is-desktop">
          <div className="column is-half is-offset-one-quarter">
            <Title title="Calcula aê" subTitle="Saiba quanto você vai gastar com combustível" />
            <Form {...this.state} handleChange={this.handleChange} handleClick={this.handleClick} />
            <br />
            {this.state.result && <Result calculate={this.calculate()}/>}
          </div>
        </div>
      </section>
    )
  }
}

export default App;
