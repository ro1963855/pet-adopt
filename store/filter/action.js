export const filterActionTypes = {
  SET_SHELTER_OPTIONS: 'SET_SHELTER_OPTIONS',
  SET_SEX_OPTIONS: 'SET_SEX_OPTIONS',
  SET_TYPE_OPTIONS: 'SET_TYPE_OPTIONS',
}

export const setShelterOptions = (options) => (dispatch) => {
  return dispatch({
    type: filterActionTypes.SET_SHELTER_OPTIONS,
    options,
  })
}

export const setSexOptions = (options) => (dispatch) => {
  return dispatch({
    type: filterActionTypes.SET_SEX_OPTIONS,
    options,
  })
}

export const setTypeOptions = (options) => (dispatch) => {
  return dispatch({
    type: filterActionTypes.SET_TYPE_OPTIONS,
    options,
  })
}
