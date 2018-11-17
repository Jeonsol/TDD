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
  /*@import "../../assets/scss/sprite/png/pngSprite";*/
  .tab_list {
    display: table;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background-color: #f3bf55;
    line-height: 50px;
    table-layout: fixed;
    .list {
      display: table-cell;
      text-align: center;
      &:before {
        display: inline-block;
        //@include sprite($icon_checked_32x32_white);
        vertical-align: top;
        content: '';
      }
    }
  }
</style>
