<template>
  <form @submit.prevent="login" :class="['login-form', { 'login-form--failed': failed }]">
    <div class="login-form__logo">
      <img src="~img/logo.svg">
    </div>
    <input v-model="email" type="email" placeholder="Email Address" autofocus required>
    <input v-model="password" type="password" placeholder="Password" required>
    <button type="submit">Log In</button>
  </form>
</template>

<script>
import { SET_CURRENT_USER, LOGIN } from '../../operations'
export default {
  data () {
    return {
      email: 'dummy@example.comd',
      password: 'valid123',
      failed: false
    }
  },
  methods: {
    async login () {
      try {
        this.failed = false
        const { data } = await this.$apollo.mutate({
          mutation: LOGIN,
          variables: {
            data: {
              email: this.email,
              password: this.password
            }
          }
        })
        localStorage.setItem('token', data.login.token)
        await this.$apollo.mutate({
          mutation: SET_CURRENT_USER,
          variables: {
            user: data.login.user
          }
        })
      } catch (e) {
        console.error(e)
        this.failed = true
      }
    }
  }
}
</script>

<style lang="scss">
@import "~#/abstracts/variables";
.login-form {
  width: 28rem;
  padding: 1.8rem;
  background: rgba(255,255,255,.08);
  border-radius: .8rem;
  border: 1px solid #333;

  &--failed {
    border-color: $colorError;
    animation: shake .5s;
  }
  &__logo {
    text-align: center;
    img {
      width: 15.6rem;
    }
  }

  input,
  button {
    display: block;
    margin-top: 1.2rem;
    width: 100%;
  }
}
</style>
