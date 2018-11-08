<template>
  <div id="Signup">
    <div>Sign up</div>
    name: <input v-model="user.name" placeholder="name"> <br />
    ID : <input v-model="user.id" placeholder="ID"> <br />
    Password : <input v-model="user.password" type="password" placeholder="password">
    <button @click="signUp">SignUp</button>
  </div>
</template>

<script>
export default {
  name: 'signUp',
  data: function () {
    return {
      user: {
        id: '',
        password: '',
        name: ''
      }
    }
  },
  methods: {
    signUp: function (event) {
      this.$http.post('/api/login/signUp', {
        user: this.user
      })
        .then(
          (response) => {
            if (response.data.result === 0) {
              alert('Error, Please, try again')
            }
            if (response.data.result === 1) {
              alert('Success')
              this.$router.push('/login')
            }
            if (response.data.result === 2) {
              alert('이미 사용 중인 아이디입니다.')
            }
          }
        )
        .catch(function (error) {
          if (error) {
            alert('error')
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
