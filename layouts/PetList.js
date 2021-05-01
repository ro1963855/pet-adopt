import Pet from '../components/Pet'

function PetList({petList}) {
  return (
    <section className="container-fluid">
      <div className="row petList">
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