<template>
  <div class="todo">
   투두
  <Tab />
  </div>
</template>

<script>
import Tab from '../common/Tab'

export default {
  name: 'todo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Tab
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .home {
    padding: 30px 30px 80px;
  }
</style>
