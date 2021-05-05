import { initializeApollo } from '../../lib/apolloClient'
import { fetchPetByIdQuery } from '../../graphql/pet'
import PetDetail from '../../components/PetDetail'

function Candidate({ props }) {
  const { pet } = props
  return (
    <div className="container">
      <PetDetail
        pet={pet}
      ></PetDetail>
    </div>
  )
}

Candidate.getInitialProps = async ({ query }) => {
  const { id } = query
  const apolloClient = initializeApollo()
  const result = await apolloClient.query({
    query: fetchPetByIdQuery,
    variables: {
      petId: id,
    }
  })

  return { props: { pet: result.data.pet } }
}

export default Candidate