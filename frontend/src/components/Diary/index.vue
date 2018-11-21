<template>
  <div class="diary">
    다이어리
    <Tab />
  </div>
</template>

<script>
import Tab from '../common/Tab'

export default {
  name: 'diary',
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
