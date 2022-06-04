<template>
  <header class="header">
		<div class="header__top head">
			<div class="container">
				<div class="head-left">
					<a class="head-left__logo" href="#">
						<img width="103" height="66" :src="require('../assets/logo.svg')" alt="logo">
					</a>
					<slot name="logout"></slot>
				</div>
			</div>
		</div>
  </header>
</template>

<script>
export default {
  name: 'HeaderUp',
}
</script>

<style lang="scss">
.header {
 background: $primary-color;
 &__top {
	background: $gradient-color;
	margin: 0;
	@media (min-width: 575.98px) {
		margin: 20px 0 0 0;
	}
	@media (min-width: 767.98px) {
		margin: 35px 0 0 0;
	}
	@media (min-width: 1199.98px) {
		margin: 53px 0 0 0;
	}
 }
}

.head {
	&-left {
		height: 55px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		@media (min-width: 767.98px) {
			height: 75px;
		}
		@media (min-width: 1199.98px) {
			height: 96px;
		}
	}
	&-left__logo {
		max-width: 50px;
		display: inline-block;
		@media (min-width: 767.98px) {
			max-width: 75px;
		}
		@media (min-width: 1199.98px) {
			max-width: 103px;
		}
		img {
			width: 100%;
			height: auto;
		}
	}
}
</style>
