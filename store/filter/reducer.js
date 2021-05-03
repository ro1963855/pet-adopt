import { filterActionTypes } from './action'

const filterInitialState = {
  shelterOptions: [],
  typeOptions: [],
  sexOptions: [],
  options: {
    shelterOptions: [],
    typeOptions: [],
    sexOptions: [],
  }
}

export default function reducer(state = filterInitialState, action) {
  switch (action.type) {
    case filterActionTypes.SET_SELECTED_SHELTER_OPTIONS:
      return Object.assign({}, state, {
        shelterOptions: action.options,
      })
    case filterActionTypes.SET_SELECTED_SEX_OPTIONS:
      return Object.assign({}, state, {
        sexOptions: action.options,
      })
    case filterActionTypes.SET_SELECTED_TYPE_OPTIONS:
      return Object.assign({}, state, {
        typeOptions: action.options,
      })
    case filterActionTypes.SET_FILTERS_OPTIONS:
      return Object.assign({}, state, {
        options: action.filterOptions,
      })
    default:
      return state
  }
}