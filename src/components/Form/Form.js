import React from 'react'
import Input from './Input'
import Button from '../Button'

const Form = () => (
  <div>
    <Input id="kmLitroCarro" type="number" textLabel="Quantos Quilometros seu carro anda por litro?" placeHolder="Digite quantos quilometros seu carro faz com 1l" />
    <Input id="precoGasolina" textLabel="Preço da Gasolina (litro)" placeHolder="Digite o preço da gasolina" />
    <Input id="distancia" textLabel="Distancia a ser percorrida (em KM)" placeHolder="Digite a distância que irá percorrer" />
    <Button text="Enviar" handleClick={() => null} />
  </div>
)

export default Form
