<template>
  <div class="users">
    <h1>사용자 목록</h1>
    <div v-for="user in users" class="user" :key="user.id">
      <div>
        <strong>{{user.name}}</strong>
        <router-link :to="{ name: 'detail', params: { id: user.id }}">더보기</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.$http.get('/api/test')
      .then((response) => {
        this.users = response.data
      })
  },
  data () {
    return {
      users: []
    }
  }
}
</script>
