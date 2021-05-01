import Link from 'next/link'
import PetCard from '../components/PetCard'
import PetListStyle from '../styles/layouts/PetList.module.scss'

function PetList({petList, totalShowNumber}) {
  return (
    <section className="container-fluid petList">
      <div className={`${PetListStyle.petList__counter} mt-4`}>總共：{totalShowNumber}筆資料</div>
      <div className="row">
        {petList.map((petInfo) => (
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
            <a className="col-6 col-md-4 col-lg-3 mt-4 text-decoration-none text-dark">
              <PetCard info={petInfo}></PetCard>
            </a>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default PetList