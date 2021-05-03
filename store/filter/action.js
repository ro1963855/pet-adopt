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
    collectSingleOption(pet, shelterOptions, 'ShelterName')
    collectSingleOption(pet, sexOptions, 'SexName')
    collectMultipleOption(pet, typeOptions, 'TypeIdName', 'BreedName')
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