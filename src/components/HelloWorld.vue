<template>
  <div class="hello">
		<div class="container hello__hi">
			{{ msg }}
		</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style lang="scss">
.hello {
}
</style>
