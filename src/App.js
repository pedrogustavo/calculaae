import React, { Component } from 'react';
import Title from './components/Title'
import { Form } from './components/Form'

class App extends Component {
  constructor() {
    super()

    this.state = {
      kmLitroCarro: '',
      precoGasolina: '',
      distancia: ''
    }

    this.handleChange = (field) => (e) => {
      this.setState({ [field]: e.target.value})
    }

    this.handleClick = () => {
      console.log(this.state)
    }
  }

  render() {
    return (
      <section className="section">
        <div className="columns is-desktop">
          <div className="column is-half is-offset-one-quarter">
            <Title title="Calcula aê" subTitle="Saiba quanto você vai gastar com combustível" />
            <Form {...this.state} handleChange={this.handleChange} handleClick={this.handleClick} />
          </div>
        </div>
      </section>
    )
  }
}

export default App;
