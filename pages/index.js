import Header from '../layouts/Header'
import PetList from '../layouts/PetList'

function Home({ petList }) {
  return (
    <div>
      <main>
        <Header></Header>
        <PetList petList={petList}></PetList>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://asms.coa.gov.tw/Asms/api/ViewNowAnimal?pageSize=200&currentPage=1&sortDirection=DESC&sortFields=AcceptDate`)
  const petList = await res.json()
  return { props: { petList } }
}

export default Home