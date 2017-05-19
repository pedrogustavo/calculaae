import React from 'react'
import Input from './Input'
import Button from '../Button'

const Form = ({ kmLitroCarro, precoGasolina, distancia, handleChange, handleClick }) => (
  <div>
    <Input
      id="kmLitroCarro"
      textLabel="Quantos Quilometros seu carro anda por litro?"
      placeHolder="Digite quantos quilometros seu carro faz com 1l"
      value={kmLitroCarro}
      onChange={handleChange('kmLitroCarro')}
    />
    <Input
      id="precoGasolina"
      textLabel="Preço da Gasolina (litro)"
      placeHolder="Digite o preço da gasolina"
      value={precoGasolina}
      onChange={handleChange('precoGasolina')}
    />
    <Input
      id="distancia"
      textLabel="Distancia a ser percorrida (em KM)"
      placeHolder="Digite a distância que irá percorrer"
      value={distancia}
      onChange={handleChange('distancia')}
      />
    <Button text="Enviar" handleClick={handleClick} />
  </div>
)

export default Form
