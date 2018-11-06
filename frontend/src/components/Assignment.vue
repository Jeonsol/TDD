<template>
  <div>
    <h1>Vue 상세목록</h1>
    <strong :class={background:users.background}>{{ users.title }}</strong>
    <p>{{ users.description }}</p>
  </div>
</template>

<script>
export default {
  created: function () {
    var id = this.$route.params.id
    this.users = this.$store.state.assignment[id-1]
  },
  data: function () {
    return {
      users: []
    }
  }
}
</script>

<style scoped>
  .background {
    background-color: red;
  }
</style>
