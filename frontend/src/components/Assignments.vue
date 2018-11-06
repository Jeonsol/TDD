<template>
	<div class="users">
		<h1>Vue 개념</h1>
		<div v-for="user in users" class="user" :key="user.id">
			<div>
				<strong>{{user.title}}</strong>
				<router-link :to="{ name: 'assignmentDetail', params: { id: user.id }}">더보기</router-link>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    created () {
      this.users = this.$store.state.assignment
    },
    data () {
      return {
        users: []
      }
    }
  }
</script>
