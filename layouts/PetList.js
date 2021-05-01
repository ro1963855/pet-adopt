import Pet from '../components/Pet'
import PetListStyle from '../styles/layouts/PetList.module.scss'

function PetList({petList, totalShowNumber}) {
  return (
    <section className="container-fluid petList">
      <div className={`${PetListStyle.petList__counter} mt-4`}>總共：{totalShowNumber}筆資料</div>
      <div className="row">
        {petList.map((petInfo) => (
          <div className="col-6 col-md-4 col-lg-3 mt-4" key={petInfo.AnimalId}>
            <Pet info={petInfo}></Pet>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PetList