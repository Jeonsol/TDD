<template>
  <div id="login">
    <div class="logo">
      <img src="../../../static/img/logo.gif" alt="tdd">
      <a :href="url.signUpUrl" class="link">join us?</a>
    </div>
    <div class="login">
      <div class="item">
        <label htmlFor="id" class="blind">ID</label>
        <input v-model="user.id" placeholder="ID" name="id">
      </div>
      <div class="item">
        <label htmlFor="password" class="blind">Password</label>
        <input v-model="user.password" type="password" placeholder="password" name="password">
      </div>
    </div>
    <button @click="login" type="button">Login</button>
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
            this.$router.push('/')
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
