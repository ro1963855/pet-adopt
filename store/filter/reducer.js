import { filterActionTypes } from './action'

const filterInitialState = {
  shelterOptions: [],
  typeOptions: [],
  sexOptions: [],
}

export default function reducer(state = filterInitialState, action) {
  switch (action.type) {
    case filterActionTypes.SET_SHELTER_OPTIONS:
      return Object.assign({}, state, {
        shelterOptions: action.options,
      })
    case filterActionTypes.SET_SEX_OPTIONS:
      return Object.assign({}, state, {
        sexOptions: action.options,
      })
    case filterActionTypes.SET_TYPE_OPTIONS:
      return Object.assign({}, state, {
        typeOptions: action.options,
      })
    default:
      return state
  }
}