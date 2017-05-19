const initialState = {
  kmLitroCarro: undefined,
  precoGasolina: undefined,
  distancia: undefined
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
