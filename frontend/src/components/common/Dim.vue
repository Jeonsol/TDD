<template>
  <div class="dim" @click="clickDim"/>
</template>

<script>

  export default {
    name: 'dim',
    methods: {
      clickDim: function () {
        this.$store.state.showAddDietLayer = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .dim {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
</style>
