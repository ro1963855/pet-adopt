import { gql } from '@apollo/client'

export const fetchAllPetsQuery = gql`
  query {
    pets {
      id
      animalId
      breed {
        name
      }
      coat {
        name
      }
      shelter {
        name
      }
      type {
        name
      }
      sex {
        name
      }
      picture
    }
  }
`

export const fetchPetByIdQuery = gql`
  query pet($petId: String!) {
    pet(id: $petId) {
      id
      animalId
      breed {
        name
      }
      coat {
        name
      }
      shelter {
        name
        address
        phone
        remark
      }
      type {
        name
      }
      sex {
        name
      }
      adoption {
        name
      }
      picture
      reason
      acceptTime
    }
  } 
`