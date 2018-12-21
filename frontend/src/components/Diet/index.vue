<template>
  <div class="diet">
    <Header />
    <button type="button" class="add_button" @click="showLayer"><span class="icon">+</span></button>
    <Layer />
    <addDietLayer />
    <Tab />
  </div>
</template>

<script>
import Tab from '../common/Tab'
import Header from '../common/Header'
import Layer from './Layer'
import addDietLayer from './addDietLayer'

export default {
  name: 'diet',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Tab,
    Header,
    Layer,
    addDietLayer
  },
  methods: {
    showLayer: function () {
      this.$store.state.showDietLayer = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
  @import '../../assets/scss/mixin';

  .diet {
    padding: 30px 30px 80px;
    .add_button {
      @include reset-button;
      width: 100%;
      padding: 20px 0;
      border: 1px dotted #fff;
      font-size: 30px;
      font-weight: 200;
      color: #fff;
      .icon {
        display: inline-block;
        margin-top: -3px;
        vertical-align: top;
      }
    }
  }
</style>
