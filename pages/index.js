import { wrapper } from '../store/store'
import { setPetTotalList } from '../store/pet/action'
import { setFilterOptions } from '../store/filter/action'
import PetList from '../layouts/PetList'
import FilterList from '../layouts/FilterList'

function Home() {
  return (
    <>
      <FilterList></FilterList>
      <PetList></PetList>
    </>
  )
}

Home.getInitialProps = wrapper.getInitialPageProps(store => async () => {
  const { pet } = store.getState()
  if (pet.total.length === 0) {
    const res = await fetch(`https://asms.coa.gov.tw/Asms/api/ViewNowAnimal?pageSize=200&currentPage=1&sortDirection=DESC&sortFields=AcceptDate`)
    const petTotalList = await res.json()
    store.dispatch(setPetTotalList(petTotalList))
    store.dispatch(setFilterOptions(petTotalList))
  }
})

export default Home