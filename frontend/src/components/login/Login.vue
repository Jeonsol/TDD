<template>
  <div id="login">
    <div>Login</div>
    ID : <input v-model="user.id" placeholder="ID"> <br />
    Password : <input v-model="user.password" type="password" placeholder="password">
    <button @click="login">login</button>
    <a :href="url.signUpUrl">signUpUrl</a>
  </div>
</template>

<script>
export default {
  name: 'login',
  data: function () {
    return {
      user: {
        id: '',
        password: ''
      },
      url: {
        signUpUrl: '/login/signUp'
      }
    }
  },
  methods: {
    login: function (event) {
      this.$http.post('/api/login/checkLogin', {
        user: this.user
      })
        .then(
          (response) => {
            alert('success login')
          },
          (error) => {
            alert(error.response.data.error)
          }
        )
        .catch(error => {
          alert(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
