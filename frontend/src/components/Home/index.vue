<template>
  <div class="home">
    <Calendar />
    <Tab />
    <Layer />
  </div>
</template>

<script>
import Calendar from '../common/Calendar'
import Tab from '../common/Tab'
import Layer from './Layer'

export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Tab,
    Calendar,
    Layer
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
    padding: 30px 30px 80px;
  }
</style>
