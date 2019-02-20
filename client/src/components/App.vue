<template>
  <div class="app">
    <div class="app__main" v-if="currentUser">
      <app-header />
      <main-wrapper />
    </div>
    <div class="app__login" v-else>
      <login-form />
    </div>
  </div>
</template>

<script>
import LoginForm from './auth/login-form'
import AppHeader from './layout/app-header'
import MainWrapper from './layout/main-wrapper'
import { GET_CURRENT_USER, GET_ME, SET_CURRENT_USER } from '../operations'

export default {
  components: {
    LoginForm,
    AppHeader,
    MainWrapper
  },
  data () {
    return {}
  },
  apollo: {
    currentUser () {
      return {
        query: GET_CURRENT_USER
      }
    },
    me () {
      return {
        query: GET_ME,
        error (e) {
          // console.log(e)
        },
        async result ({ data }) {
          if (!data.me) return
          try {
            await this.$apollo.mutate({
              mutation: SET_CURRENT_USER,
              variables: {
                user: data.me
              }
            })
          } catch(e) {
            // console.log(e)
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import "~#/abstracts/mixins";
.app {
  &__main,
  &__login {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
  &__login {
    @include vertical-center();
  }
}
</style>