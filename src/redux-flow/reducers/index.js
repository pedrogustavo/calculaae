const initialState = {
  kmPorLitro: 0,
  precoGasolina: 0,
  distancia: 0
}

export default (state = initialState, action) => {
  if (action.type === 'UPDATE_FIELD') {
    return {
      ...state,
      [action.payload.field]: action.payload.value
    }
  }
  return state
}
