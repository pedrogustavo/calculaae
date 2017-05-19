import React from 'react'
import Title from './components/Title'
import { Form } from './components/Form'

const App = () => (
  <section className="section">
    <div className="columns is-desktop">
      <div className="column is-half is-offset-one-quarter">
        <Title title="Calcula aê" subTitle="Saiba quanto você vai gastar com combustível" />
        <Form />
      </div>
    </div>
  </section>
)

export default App;
