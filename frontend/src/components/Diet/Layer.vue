<template>
  <div class="layer" v-if="this.$store.state.showDietLayer">
    <ul class="set_list">
      <li class="list title">기록할 내용 선택</li>
      <li class="list todo"><a @click="clickLayer('morning')" role="button" class="link">아침</a></li>
      <li class="list diet"><a @click="clickLayer('lunch')" role="button" class="link">점심</a></li>
      <li class="list diary"><a @click="clickLayer('dinner')" role="button" class="link">저녁</a></li>
      <li class="list diary"><a @click="clickLayer('snack')" role="button" class="link">간식</a></li>
      <li class="list diary"><a @click="clickLayer('drinking')" role="button" class="link">음주</a></li>
      <li class="list diary"><a @click="clickLayer('workout')" role="button" class="link">운동</a></li>
    </ul>
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
      this.$store.state.showDietLayer = false
      this.$store.state.showAddDietLayer = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/variable';

  .set_list {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    padding: 20px;
    transform: translate(-50%, -50%);
    text-align: center;
    .list {
      padding: 10px;
      background-color: #f0efea;
      font-size: 12px;
      &.title {
        background-color: #757575;
        font-size: 14px;
        color: #fff;
      }
      &:nth-child(2n) {
        background-color: #c3c3c3;
      }
    }
    .link {
      display: block;
      width: 180px;
      color: #5c5b57;
    }
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
