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
	margin: 53px 0 0 0;
 }
}

.head {
	&-left {
		height: 96px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	&-left__logo {
		max-width: 103px;
		display: inline-block;
		img {
			width: 100%;
		}
	}
}
</style>
