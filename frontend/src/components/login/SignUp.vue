<template>
  <div id="Signup">
    <div class="logo">
      <img src="../../../static/img/logo.gif" alt="tdd">
      <p class="link">welcome</p>
    </div>
    <div class="login">
      <div class="item">
        <label htmlFor="name" class="blind">Name</label>
        <input v-model="user.name" placeholder="name" name="name">
      </div>
      <div class="item">
        <label htmlFor="id" class="blind">ID</label>
        <input v-model="user.id" placeholder="ID" name="id">
      </div>
      <div class="item">
        <label htmlFor="password" class="blind">password</label>
        <input v-model="user.password" type="password" placeholder="password" name="password">
      </div>
    </div>
    <button type="button" @click="signUp">SignUp</button>
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

<style lang="scss" scoped>
  .logo {
    text-align: center;
    img {
      width: 280px;
      vertical-align: top;
    }
    .link {
      display: block;
      color: #c0bec1;
    }
  }
  .login {
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 100px;
    text-align: center;
    .item {
      & + .item {
        margin-top: 20px;
      }
      input {
        width: 100%;
        height: 40px;
        padding-left: 10px;
        border: 0;
        border-radius: 2px;
        box-sizing: border-box;
        &::-webkit-input-placeholder {
          color: #cec3c1;
        }
      }
    }
  }
  button {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #f3bf55;
    color: #fff;
    font-size: 18px;
  }
</style>
