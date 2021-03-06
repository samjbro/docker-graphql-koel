import gql from 'graphql-tag'

const SET_CURRENT_USER = gql`
  mutation setCurrentUser($user: User) {
    setCurrentUser (user: $user) @client
  }
`
const LOGIN = gql`
  mutation login($data: LoginUserInput) {
    login (data: $data) {
      token
      user {
        id
        name
        email
      }
    }
  }
`

export { SET_CURRENT_USER, LOGIN }