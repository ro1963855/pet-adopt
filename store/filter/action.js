import useFilterHelper from '../../lib/useFilterHelper'

export const filterActionTypes = {
  SET_SELECTED_SHELTER_OPTIONS: 'SET_SELECTED_SHELTER_OPTIONS',
  SET_SELECTED_SEX_OPTIONS: 'SET_SELECTED_SEX_OPTIONS',
  SET_SELECTED_TYPE_OPTIONS: 'SET_SELECTED_TYPE_OPTIONS',
  SET_FILTERS_OPTIONS: 'SET_FILTERS_OPTIONS',
}

export const setSelectedShelterOptions = (options) => (dispatch) => {
  return dispatch({
    type: filterActionTypes.SET_SELECTED_SHELTER_OPTIONS,
    options,
  })
}

export const setSelectedSexOptions = (options) => (dispatch) => {
  return dispatch({
    type: filterActionTypes.SET_SELECTED_SEX_OPTIONS,
    options,
  })
}

export const setSelectedTypeOptions = (options) => (dispatch) => {
  return dispatch({
    type: filterActionTypes.SET_SELECTED_TYPE_OPTIONS,
    options,
  })
}

export const setFilterOptions = (petTotalList) => (dispatch) => {
  const { collectSingleOption, collectMultipleOption, sortSingleOptions } = new useFilterHelper()
  const shelterOptions = []
  const sexOptions = []
  const typeOptions = []

  petTotalList.forEach(pet => {
    collectSingleOption(pet, shelterOptions, ['shelter', 'name'])
    collectSingleOption(pet, sexOptions, ['sex', 'name'])
    collectMultipleOption(pet, typeOptions, ['type', 'name'], ['breed', 'name'])
  })

  shelterOptions.sort(sortSingleOptions)
  sexOptions.sort(sortSingleOptions)
  return dispatch({
    type: filterActionTypes.SET_FILTERS_OPTIONS,
    filterOptions: {
      shelterOptions,
      sexOptions,
      typeOptions,
    },
  })
}