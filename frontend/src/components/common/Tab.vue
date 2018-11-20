<template>
  <ul class="tab_list">
    <li class="list tdd">
      <button type="button" class="home"><span class="blind">home</span></button>
    </li>
    <li class="list todo">
      <button type="button" class="todo"><span class="blind">todo</span></button>
    </li>
    <li class="list diet">
      <button type="button" class="diet"><span class="blind">diet</span></button>
    </li>
    <li class="list diary">
      <button type="button" class="diary"><span class="blind">diary</span></button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Tab'
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
      button {
        width: 100%;
        height: 50px;
        &:before {
          display: inline-block;
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
