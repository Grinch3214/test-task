<template>
  <div id="app">
		<header-up>
			<template
				v-slot:logout
				v-if="this.$router.currentRoute.name === 'todo'"
			>
        <button class="logout" @click="logout">Logout</button>
      </template>
		</header-up>
		<main class="main">
			<router-view />
		</main>
		<footer-up />
  </div>
</template>

<script>
import HeaderUp from '@/components/HeaderUp.vue'
import FooterUp from '@/components/FooterUp.vue'

export default {
	components: {
    HeaderUp,
		FooterUp,
  },
	methods: {
		logout() {
			localStorage.removeItem('user-info');
			this.$router.push({ path: 'login' })
		}
	}
}
</script>

<style lang="scss">
#app {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	overflow: hidden;
}
.main {
	flex: 1 1 auto;
}
</style>