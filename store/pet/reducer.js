import { petActionTypes } from './action'

const petInitialState = {
  total: [],
}

export default function reducer(state = petInitialState, action) {
  switch (action.type) {
    case petActionTypes.SET_PET_TOTAL_LIST:
      return Object.assign({}, state, {
        total: action.list,
      })
    default:
      return state
  }
}