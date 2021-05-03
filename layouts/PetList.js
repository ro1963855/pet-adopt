import { useMemo, useState, useEffect } from "react"
import { connect } from 'react-redux'
import Link from 'next/link'
import PetCard from '../components/PetCard'
import PetListStyle from '../styles/layouts/PetList.module.scss'

function PetList({pet, filter}) {
  const { total: petTotalList } = pet
  const { shelterOptions, typeOptions, sexOptions } = filter
  const perPageNumber = 30
  const [ pageSize, setPageSize ] = useState(perPageNumber)
  let observer = null
  const petFilterList = useMemo(() => {
    setPageSize(perPageNumber)
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

    return petTotalListFilter
  }, [petTotalList, shelterOptions, typeOptions, sexOptions])
  const totalShowNumber = useMemo(() => Object.keys(petFilterList).length, [petFilterList])
  const petShowList = useMemo(() => petFilterList.slice(0, pageSize), [petFilterList, pageSize])

  useEffect(() => {
    const options = {
      root: document.querySelector('window'),
      rootMargin: '0px',
      threshold: 1,
    }
    
    observer = new IntersectionObserver((entries) => {
      if (entries.some((entry => entry.intersectionRatio === 1)) && pageSize < totalShowNumber) {
        setPageSize(pageSize + perPageNumber)
      }
    }, options);

    [].forEach.call(document.getElementsByClassName("petList__pet__middle"), (el) => observer.observe(el))

    return () => {
      observer.disconnect()
    }
  }, [petShowList])

  return (
    <section className="container petList">
      <div className={`${PetListStyle.petList__counter} mt-4`}>總共：{totalShowNumber}筆資料</div>
      <div className="row">
        {petShowList.map((petInfo, index) => (
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
            <a className={`${index === Math.ceil(pageSize * 0.7) || petShowList.length - 1 === index ? 'petList__pet__middle': ''} col-6 col-md-4 col-lg-3 mt-4 text-decoration-none text-dark`}>
              <PetCard info={petInfo}></PetCard>
            </a>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default connect((state) => state)(PetList)