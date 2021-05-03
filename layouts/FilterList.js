import { connect } from 'react-redux'
import { setSelectedShelterOptions, setSelectedSexOptions, setSelectedTypeOptions } from '../store/filter/action'
import { bindActionCreators } from 'redux'
import FilterListStyle from '../styles/layouts/FilterList.module.scss'
import MultiSelector from '../components/MultiSelector.js'
import GroupMultiSelector from '../components/GroupMultiSelector.js'

function FilterList({filter, setSelectedShelterOptions, setSelectedSexOptions, setSelectedTypeOptions}) {
const { shelterOptions, sexOptions, typeOptions } = filter.options

  return (
    <section className="container filterList mt-2">
      <div className={`row ${FilterListStyle.filterList}`}>
        <div className="col-12 col-md-4 mt-3">
          <MultiSelector
            placeholder="選擇收容所"
            defaultValue={filter.shelterOptions}
            options={shelterOptions}
            onChange={setSelectedShelterOptions}
          ></MultiSelector>
        </div>
        <div className="col-12 col-md-4 mt-3">
          <GroupMultiSelector
            placeholder="選擇品種"
            defaultValue={filter.typeOptions}
            groupedOptions={typeOptions}
            onChange={setSelectedTypeOptions}
          ></GroupMultiSelector>
        </div>
        <div className="col-12 col-md-4 mt-3">
          <MultiSelector
            placeholder="選擇性別"
            defaultValue={filter.sexOptions}
            options={sexOptions}
            onChange={setSelectedSexOptions}
          ></MultiSelector>
        </div>
      </div>
    </section>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedShelterOptions: bindActionCreators(setSelectedShelterOptions, dispatch),
    setSelectedSexOptions: bindActionCreators(setSelectedSexOptions, dispatch),
    setSelectedTypeOptions: bindActionCreators(setSelectedTypeOptions, dispatch),
  }
}

export default connect((state) => state, mapDispatchToProps)(FilterList)