import { useMemo } from "react"
import { connect } from 'react-redux'
import Link from 'next/link'
import PetCard from '../components/PetCard'
import PetListStyle from '../styles/layouts/PetList.module.scss'

function PetList({pet, filter}) {
  const { total: petTotalList } = pet
  const { shelterOptions, typeOptions, sexOptions } = filter
  const petList = useMemo(() => {
    console.time('test')
    const result = {}
    let petTotalListFilter = [...petTotalList]
    if (shelterOptions.length !== 0) {
      petTotalListFilter = petTotalListFilter.filter(pet => shelterOptions.findIndex((shelter) => shelter.value === pet.ShelterName) !== -1)
    }

    if (typeOptions.length !== 0) {
      petTotalListFilter = petTotalListFilter.filter(pet => typeOptions.findIndex((type) => type.value === pet.BreedName) !== -1)
    }

    if (sexOptions.length !== 0) {
      petTotalListFilter = petTotalListFilter.filter(pet => sexOptions.findIndex((sex) => sex.value === pet.SexName) !== -1)
    }

    petTotalListFilter.forEach(pet => {
      result[pet.AnimalId] = true
    })
    console.timeEnd('test')
    return result
  }, [petTotalList, shelterOptions, typeOptions, sexOptions])
  const totalShowNumber = useMemo(() => Object.keys(petList).length, [petList])

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
              style={{display: petList[petInfo.AnimalId] === true ? 'block' : 'none' }}
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