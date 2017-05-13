import React from 'react';
import Title from './components/Title'
import Button from './components/Button'
import { Input } from './components/Form'

const App = () => (
  <section className="section">
    <div className="columns is-desktop">
      <div className="column is-half is-offset-one-quarter">
        <Title title="Calcula aê" subTitle="Saiba quanto você vai gastar com combustível" />
        <Input id="kmLitroCarro" type="number" textLabel="Quantos Quilometros seu carro anda por litro?" placeHolder="Digite quantos quilometros seu carro faz com 1l" />
        <Input id="precoGasolina" textLabel="Preço da Gasolina (litro)" placeHolder="Digite o preço da gasolina" />
        <Input id="distancia" textLabel="Distancia a ser percorrida (em KM)" placeHolder="Digite a distância que irá percorrer" />
        <Button text="Enviar" handleClick={() => null} />
      </div>
    </div>
  </section>
)

export default App;
