<template>
  <div class="main-wrapper">
    <!-- <div v-for="user in users" :key="user.id">
      Name: {{ user.name }}
    </div> -->
    <button @click="getUsers">Get Users</button>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const GET_USERS = gql`
  query users {
    users {
      id
      name
      email
    }
  }
`

export default {
  methods: {
    async getUsers () {
      const { data } = await this.$apollo.query({
        query: GET_USERS
      })
      console.log(data.users[0].name)
    }
  },
  // apollo: {
  //   users () {
  //     return {
  //       query: GET_USERS
  //     }
  //   }
  // }
}
</script>