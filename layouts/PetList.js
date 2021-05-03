import { useMemo } from "react"
import { connect } from 'react-redux'
import Link from 'next/link'
import PetCard from '../components/PetCard'
import PetListStyle from '../styles/layouts/PetList.module.scss'

function PetList({pet, filter}) {
  const { total: petTotalList } = pet
  const { shelterOptions, sexOptions, typeOptions } = filter
  const petList = useMemo(() => (
    [...petTotalList]
    .filter(pet => shelterOptions.length === 0 || shelterOptions.findIndex((shelter) => shelter.value === pet.ShelterName) !== -1)
    .filter(pet => typeOptions.length === 0 || typeOptions.findIndex((type) => type.value === pet.BreedName) !== -1)
    .filter(pet => sexOptions.length === 0 || sexOptions.findIndex((sex) => sex.value === pet.SexName) !== -1)
  ), [petTotalList, shelterOptions, typeOptions, sexOptions])
  const totalShowNumber = useMemo(() => petList.length, [petList])

  return (
    <section className="container petList">
      <div className={`${PetListStyle.petList__counter} mt-4`}>總共：{totalShowNumber}筆資料</div>
      <div className="row">
        {petTotalList.map((petInfo) => (
          <Link
            href={{
              pathname: '/pets',
              query: {
                animalId: petInfo.AnimalId,
                shelterId: petInfo.UserTag,
                acceptId: petInfo.AcceptNum,
              },
            }}
            key={petInfo.AnimalId}
          >
            <a
              style={{display: petList.findIndex(filterPet => filterPet.AnimalId === petInfo.AnimalId) !== -1 ? 'block' : 'none' }}
              className="col-6 col-md-4 col-lg-3 mt-4 text-decoration-none text-dark"
            >
              <PetCard info={petInfo}></PetCard>
            </a>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default connect((state) => state)(PetList)