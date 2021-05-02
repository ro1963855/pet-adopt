export const petActionTypes = {
  SET_PET_TOTAL_LIST: 'SET_PET_TOTAL_LIST',
}

export const setPetTotalList = (list) => (dispatch) => {
  return dispatch({
    type: petActionTypes.SET_PET_TOTAL_LIST,
    list,
  })
}
