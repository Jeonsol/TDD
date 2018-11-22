<template>
  <ul class="tab_list">
    <li class="list tdd">
      <a @click="clickTab('home')" class="home"><span class="blind">home</span></a>
    </li>
    <li class="list todo">
      <a @click="clickTab('todo')" class="todo"><span class="blind">todo</span></a>
    </li>
    <li class="list diet">
      <a @click="clickTab('diet')" class="diet"><span class="blind">diet</span></a>
    </li>
    <li class="list diary">
      <a @click="clickTab('diary')" class="diary"><span class="blind">diary</span></a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Tab',
  data () {
    return {
      homeUrl: '/',
      todoUrl: '/todo',
      dietUrl: '/diet',
      diaryUrl: '/diary'
    }
  },
  methods: {
    clickTab: function (item) {
      let url
      if (item === 'home') {
        url = '/'
      } else {
        url = '/' + item + '/' + this.$store.state.today
      }
      this.$store.state.headerDate = this.$store.state.today
      this.$store.state.showLayer = false
      this.$router.push(url)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../spritesmith-generated/sprite";
  .tab_list {
    display: table;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background-color: #f3bf55;
    table-layout: fixed;
    .list {
      display: table-cell;
      position: relative;
      text-align: center;
      & + .list:before{
        position: absolute;
        left: 0;
        top: 10px;
        bottom: 10px;
        width: 1px;
        background-color: #f5f5f5;
        content: '';
      }
      a {
        display: block;
        height: 50px;
        line-height: 50px;
        &:before {
          display: inline-block;
          margin-top: 9px;
          vertical-align: top;
          content: '';
        }
        &.home:before {
          @include sprite($icon-home-32x32-white);
        }
        &.todo:before {
          @include sprite($icon-checked-32x32-white);
        }
        &.diet:before {
          @include sprite($icon-diet-32x32-white);
        }
        &.diary:before {
          @include sprite($icon-diary-32x32-white);
        }
      }
    }
  }
</style>
