<template>
  <div class="layer" v-if="this.$store.state.showLayer">
    <ul class="set_list">
      <li class="list todo"><a @click="clickLayer('todo')" role="button" class="link">Todo</a></li>
      <li class="list diet"><a @click="clickLayer('diet')" role="button" class="link">Diet</a></li>
      <li class="list diary"><a @click="clickLayer('diary')" role="button" class="link">Diary</a></li>
    </ul>
    <div class="dim" @click="clickDim"/>
  </div>
</template>

<script>

export default {
  name: 'layer',
  methods: {
    clickLayer: function (item) {
      let url = item + '/' + this.$store.state.selectedDate
      this.$router.push(url)
    },
    clickDim: function () {
      this.$store.state.showLayer = false
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
    background-color: #f1efe7;
    transform: translate(-50%, -50%);
    .list {
      &.todo {
        background-color: $todo;
      }
      &.diet {
        background-color: $diet;
      }
      &.diary {
        background-color: $diary;
      }
      & + .list {
        margin-top: 20px;
      }
    }
    .link {
      display: block;
      padding: 10px;
      width: 180px;
      color: #fff;
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
