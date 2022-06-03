<template>
  <section class="todo">
		<div class="todo__title">
			<img width="186" height="119" :src="require('../assets/logo.svg')" alt="logo">
		</div>
    <div class="container">
			<div class="todo__container">
				<h2 class="todo__name">
					Thank you {{ welcome }}!
				</h2>
				<to-do />
			</div>
		</div>
  </section>
</template>

<script>
import ToDo from '@/components/ToDo.vue';
export default {
  components: { ToDo },
	name: 'TodoView',
	data:() => ({
		welcome: '',
	}),
	mounted() {

		let user = localStorage.getItem('user-info');
		if(!user) {
			this.$router.push({path: 'login'})
		}
		let name = JSON.parse(user);
		if (!name) return
		this.welcome = name.login;
	}
}
</script>

<style lang="scss">
.todo {
	background: linear-gradient(180deg, rgba(0,169,231,1) 0%, rgba(0,91,159,1) 70%, rgba(229,229,229,1) 70%, rgba(229,229,229,1) 100%);
	padding-bottom: 120px;
	
	&__title {
		max-width: 186px;
		padding: 65px 0;
		margin: 0 auto;
		img {
			width: 100%;
		}
	}

	&__container {
		background: #ffffff;
		text-align: center;
	}
	&__name {
		font-weight: 700;
		font-size: 60px;
		line-height: 94px;
		padding: 32px 0;
	}
}

</style>
