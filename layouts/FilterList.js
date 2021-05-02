import { connect } from 'react-redux'
import { setShelterOptions, setSexOptions, setTypeOptions } from '../store/filter/action'
import { bindActionCreators } from 'redux'
import useFilterHelper from '../lib/useFilterHelper'
import FilterListStyle from '../styles/layouts/FilterList.module.scss'
import MultiSelector from '../components/MultiSelector.js'
import GroupMultiSelector from '../components/GroupMultiSelector.js'

function FilterList({pet, filter, setShelterOptions, setSexOptions, setTypeOptions}) {
  const { total: petTotalList } = pet
  const shelterOptions = []
  const sexOptions = []
  const typeOptions = []
  const { collectSingleOption, collectMultipleOption, sortSingleOptions } = new useFilterHelper()

  petTotalList.forEach(pet => {
    collectSingleOption(pet, shelterOptions, 'ShelterName')
    collectSingleOption(pet, sexOptions, 'SexName')
    collectMultipleOption(pet, typeOptions, 'TypeIdName', 'BreedName')
  })

  shelterOptions.sort(sortSingleOptions)
  sexOptions.sort(sortSingleOptions)

  return (
    <section className="container filterList mt-2">
      <div className={`row ${FilterListStyle.filterList}`}>
        <div className="col-12 col-md-4 mt-3">
          <MultiSelector
            placeholder="選擇收容所"
            defaultValue={filter.shelterOptions}
            options={shelterOptions}
            onChange={setShelterOptions}
          ></MultiSelector>
        </div>
        <div className="col-12 col-md-4 mt-3">
          <GroupMultiSelector
            placeholder="選擇品種"
            defaultValue={filter.typeOptions}
            groupedOptions={typeOptions}
            onChange={setTypeOptions}
          ></GroupMultiSelector>
        </div>
        <div className="col-12 col-md-4 mt-3">
          <MultiSelector
            placeholder="選擇性別"
            defaultValue={filter.sexOptions}
            options={sexOptions}
            onChange={setSexOptions}
          ></MultiSelector>
        </div>
      </div>
    </section>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setShelterOptions: bindActionCreators(setShelterOptions, dispatch),
    setSexOptions: bindActionCreators(setSexOptions, dispatch),
    setTypeOptions: bindActionCreators(setTypeOptions, dispatch),
  }
}

export default connect((state) => state, mapDispatchToProps)(FilterList)