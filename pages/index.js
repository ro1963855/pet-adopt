import Head from 'next/head'
import Pet from '../components/Pet'

function Home({ petList }) {
  return (
    <div>
      { console.log(petList) }
      <Head>
        <title>領養你的寵物</title>
        <meta name="description" content="幫助大家在各地收容所領養到想要的寵物" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className="navbar navbar-dark bg-dark">
          <nav className="container-fluid">
            <a className="navbar-brand" href="#">寵物領養</a>
          </nav>
        </header>
        <section className="container-fluid">
          <div className="row petList">
            {petList.map((petInfo) => (
              <div className="col-6 col-md-4 col-lg-3 mt-4" key={petInfo.AnimalId}>
                <Pet info={petInfo}></Pet>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  // Fetch petList from external API
  const res = await fetch(`https://asms.coa.gov.tw/Asms/api/ViewNowAnimal?pageSize=200&currentPage=1&sortDirection=DESC&sortFields=AcceptDate`)
  const petList = await res.json()

  // Pass petList to the page via props
  return { props: { petList } }
}

export default Home