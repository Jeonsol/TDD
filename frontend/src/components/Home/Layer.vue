<template>
  <div class="layer">
    <div class="inner">
      레이어당
    </div>
    <div class="dim" />
  </div>
</template>

<script>

export default {
  name: 'layer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .inner {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    padding: 20px;
    background-color: #f1efe7;
    transform: translate(-50%, -50%);
  }
  .dim {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
</style>
