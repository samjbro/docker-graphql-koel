import gql from 'graphql-tag'

const GET_CURRENT_USER = gql`
  query currentUser {
    currentUser @client {
      name
      email
    }
  }
`
const GET_ME = gql`
  query me {
    me {
      name
      email
    }
  }
`

export { GET_CURRENT_USER, GET_ME }