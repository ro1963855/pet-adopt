import PetDetail from '../../components/PetDetail'

export default function Candidate({ animalData, shelterData }) {
  return (
    <div className="container">
      <PetDetail
        info={{...animalData, ...shelterData}}
      ></PetDetail>
    </div>
  )
}

export async function getServerSideProps({ query }) {
  const { animalId, shelterId, acceptId } = query
  const res = await Promise.all([
    fetch(`https://asms.coa.gov.tw/Asms/api/Animals?AcceptNum=${acceptId}&keyNo=${animalId}`),
    fetch(`https://asms.coa.gov.tw/Asms/api/Shelter?UserTag=${shelterId}`),
  ])
  const animalData = await res[0].json()
  const shelterData = await res[1].json()

  return { props: { animalData: animalData[0], shelterData: shelterData[0] } }
}