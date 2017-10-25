import React from 'react'
import Input from './Input'
import Button from '../Button'

const Form = ({ kmLitroCarro, precoGasolina, origem, destino, handleChange, handleClick }) => (
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
    <fieldset className="box">
      <Input
        id="origem"
        textLabel="Origem"
        placeHolder="Digite o local onde sua viagem irá iniciar"
        value={origem}
        onChange={handleChange('origem')}
        />
        
      <Input
        id="destino"
        textLabel="Destino"
        placeHolder="Digite o destino de sua viagem"
        value={destino}
        onChange={handleChange('destino')}
      />
    </fieldset>
    <Button text="Enviar" handleClick={handleClick} />
  </div>
)

export default Form
