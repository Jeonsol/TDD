<template>
  <div class="diet">
    다이어트
    <Tab />
  </div>
</template>

<script>
import Tab from '../common/Tab'

export default {
  name: 'diet',
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
  .diet {
    padding: 10px;
  }
</style>
