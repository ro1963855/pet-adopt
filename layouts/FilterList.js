import FilterListStyle from '../styles/layouts/FilterList.module.scss'
import MultiSelector from '../components/MultiSelector.js'
import GroupMultiSelector from '../components/GroupMultiSelector.js'

function FilterList({petList, handleShelterChange, handleTypeChange, handleSexChange}) {
  const shelterOptions = []
  const sexOptions = []
  const typeOptions = []

  petList.forEach(pet => {
    collectSingleOption(pet, shelterOptions, 'ShelterName')
    collectSingleOption(pet, sexOptions, 'SexName')
    collectMultipleOption(pet, typeOptions, 'TypeIdName', 'BreedName')
  })

  shelterOptions.sort(sortSingleOptions)
  sexOptions.sort(sortSingleOptions)

  function collectSingleOption(pet, collection, target) {
    if (collection.findIndex(collect => collect.value === pet[target]) === -1) {
      collection.push({
        label: pet[target],
        value: pet[target],
      })
    }
  }

  function collectMultipleOption(pet, collection, groupTarget, memberTarget) {
    let group = collection.find(type => type.label === pet[groupTarget])
    if (group === undefined) {
      group = {
        label: pet[groupTarget],
        options: [],
      }

      collection.push(group)
    }

    collectSingleOption(pet, group.options, memberTarget)
  }

  function sortSingleOptions(a, b) {
    if (a.value < b.value) {
      return -1;
    }
    if (a.value > b.value) {
      return 1;
    }

    return 0;
  }

  return (
    <section className="container-fluid filterList mt-2">
      <div className={`row ${FilterListStyle.filterList}`}>
        <div className="col-12 col-md-4 mt-3">
          <MultiSelector
            placeholder="選擇收容所"
            onChange={handleShelterChange}
            options={shelterOptions}
          ></MultiSelector>
        </div>
        <div className="col-12 col-md-4 mt-3">
          <GroupMultiSelector
            placeholder="選擇品種"
            onChange={handleTypeChange}
            groupedOptions={typeOptions}
          ></GroupMultiSelector>
        </div>
        <div className="col-12 col-md-4 mt-3">
          <MultiSelector
            placeholder="選擇性別"
            onChange={handleSexChange}
            options={sexOptions}
          ></MultiSelector>
        </div>
      </div>
    </section>
  )
}

export default FilterList