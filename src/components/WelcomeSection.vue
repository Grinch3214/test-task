<template>
  <section class="welcome">
		<div class="container">
			<h2 class="welcome__title">Welcome to <br> Business Analytics Online</h2>
		</div>
  </section>
</template>

<script>

export default {
  name: 'WelcomeSection',
}
</script>

<style lang="scss">
.welcome {
	background: url('../assets/images/background.jpg') 0 0/cover no-repeat;
	min-height: 457px;
	&__title {
		font-size: 55px;
		line-height: 86px;
	}
}

</style>
