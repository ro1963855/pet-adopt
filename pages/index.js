import { useState, useMemo } from "react"
import PetList from '../layouts/PetList'
import FilterList from '../layouts/FilterList'

function Home({ petTotalList }) {
  const [shelterSelectedOption, setShelterSelectedOption] = useState([])
  const [typeSelectedOption, setTypeSelectedOption] = useState([])
  const [sexSelectedOption, setSexSelectedOption] = useState([])

  const petList = useMemo(() => (
    [...petTotalList]
      .filter(pet => shelterSelectedOption.length === 0 || shelterSelectedOption.findIndex((shelter) => shelter.value === pet.ShelterName) !== -1)
      .filter(pet => typeSelectedOption.length === 0 || typeSelectedOption.findIndex((type) => type.value === pet.BreedName) !== -1)
      .filter(pet => sexSelectedOption.length === 0 || sexSelectedOption.findIndex((sex) => sex.value === pet.SexName) !== -1)
  ), [petTotalList, shelterSelectedOption, typeSelectedOption, sexSelectedOption])

  const totalShowNumber = useMemo(() => petList.length, [petList])

  return (
    <>
      <FilterList
        petList={petTotalList}
        handleShelterChange={setShelterSelectedOption}
        handleTypeChange={setTypeSelectedOption}
        handleSexChange={setSexSelectedOption}
      ></FilterList>
      <PetList
        petTotalList={petTotalList}
        petList={petList}
        totalShowNumber={totalShowNumber}
      ></PetList>
    </>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://asms.coa.gov.tw/Asms/api/ViewNowAnimal?pageSize=200&currentPage=1&sortDirection=DESC&sortFields=AcceptDate`)
  const petTotalList = await res.json()

  return { props: { petTotalList } }
}

export default Home