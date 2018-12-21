<template>
  <div class="layer" v-if="this.$store.state.showAddDietLayer">
    <div>에드밀</div>
    <div class="dim" @click="clickDim"/>
  </div>
</template>

<script>

export default {
  name: 'layer',
  methods: {
    clickDim: function () {
      this.$store.state.showAddDietLayer = false
    },
    clickLayer: function (type) {
      console.log('hi')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/variable';
  .layer {
    background-color: red;
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
