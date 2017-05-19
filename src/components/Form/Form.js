import React from 'react'
import Input from './Input'
import Button from '../Button'
import { connect } from 'react-redux'

const Form = (props) => (
  <div>
    <Input
      id="kmLitroCarro"
      textLabel="Quantos Quilometros seu carro anda por litro?"
      placeHolder="Digite quantos quilometros seu carro faz com 1l"
      value={props.kmLitroCarro}
      onChange={props.handleChange('kmLitroCarro')}
    />
    <Input
      id="precoGasolina"
      textLabel="Preço da Gasolina (litro)"
      placeHolder="Digite o preço da gasolina"
      value={props.precoGasolina}
      onChange={props.handleChange('precoGasolina')}
    />
    <Input
      id="distancia"
      textLabel="Distancia a ser percorrida (em KM)"
      placeHolder="Digite a distância que irá percorrer"
      value={props.distancia}
      onChange={props.handleChange('distancia')}
      />
    <Button text="Enviar" handleClick={() => null} />
  </div>
)


const mapStateToProps = (state) => {
  return {
    kmLitroCarro: state.kmLitroCarro,
    precoGasolina: state.precoGasolina,
    distancia: state.distancia
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChange: (field) => (e) => {
      dispatch({
        type: 'UPDATE_FIELD',
        payload: {
          field,
          value: +e.target.value
        }
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
