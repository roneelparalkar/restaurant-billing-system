<template>
  <div class="login-card">
    <h1>LOGIN</h1>
    <br />
    <form>
      <input
        v-model="formData.userName"
        type="text"
        name="user"
        placeholder="Username"
      />
      <input
        v-model="formData.password"
        type="password"
        name="pass"
        placeholder="Password"
      />
      <input
        type="submit"
        name="login"
        class="login login-submit"
        value="Login"
        @click.prevent="submitForm"
      />
    </form>

    <!-- <div class="login-help">
      <a href="#">Forgot Password</a>
    </div> -->
    <div v-if="formData.errorMsg" class="error-msg">
      {{ formData.errorMsg }}
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login',
  data() {
    return {
      formData: {
        userName: '',
        password: '',
        errorMsg: '',
      },
    }
  },
  methods: {
    submitForm() {
      if (!this.formData.userName) {
        this.formData.errorMsg = 'Username Required'
        this.clearErrorMsg()
        return
      }
      if (!this.formData.password) {
        this.formData.errorMsg = 'Password Required'
        this.clearErrorMsg()
        return
      }

      if (
        this.formData.userName === 'test' &&
        this.formData.password === 'test'
      ) {
        window.location.href = '/'
        // this.$router.push('/')
      } else {
        this.formData.errorMsg = 'Invalid Username and Password'
        this.clearErrorMsg()
      }
    },
    clearErrorMsg() {
      setTimeout(() => {
        this.formData.errorMsg = ''
      }, 1500)
    },
  },
}
</script>

<style>
body {
  background: url(~assets/images/restaurant-bg.png) no-repeat center center
    fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  font-family: 'Source Sans Pro', sans-serif;
}
</style>
