<template>
  <div class="home">
    <Calendar />
    <Tab />
  </div>
</template>

<script>
import Calendar from './common/Calendar'
import Tab from './common/Tab'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Tab,
    Calendar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  body {
    background-color: #3a3a3a;
  }
</style>
<style lang="scss" scoped>
  .home {
    padding: 30px;
  }
</style>
