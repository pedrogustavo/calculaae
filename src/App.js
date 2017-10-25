import React, { Component } from 'react'
import axios from 'axios'
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
      origem: '',
      destino: '',
      result: false
    }

    this.handleChange = (field) => (e) => {
      this.setState({ [field]: e.target.value})
    }

    this.calculate = (state) => {
      axios.get(`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${encodeURI(this.state.origem)}&destinations=${encodeURI(this.state.destino)}&key=AIzaSyBelv2m9VnFqBZJaJl3j2ZUvTztsdb8OFY`)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
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
