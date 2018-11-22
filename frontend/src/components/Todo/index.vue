<template>
  <div class="todo">
  <Header />
  <Tab />
  </div>
</template>

<script>
import Tab from '../common/Tab'
import Header from '../common/Header'

export default {
  name: 'todo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Tab,
    Header
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .todo {
    padding: 30px 30px 80px;
  }
</style>
