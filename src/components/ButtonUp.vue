<template>
	<button 
		class="btn-default"
		@click.prevent="clickBtn"
	>
		{{ name }} 
	</button>
</template>

<script>
export default {
	name: 'ButtonUp',
	props: {
		name: {
			type: String,
			default: 'Button'
		}
	},
	methods: {
		clickBtn() {
			this.$emit('click');
		}
	}
}
</script>

<style lang="scss">
	.btn-default {
		background: $second-color;
		display: inline-block;
		width: 100%;
		text-align: center;
		padding: 9px 0;
		border: 2px solid transparent;
		font-size: 18px;
		color: #fff;
		transition: all .3s ease;
		@media (min-width: 1199.98px) {
			font-size: 25px;
			padding: 10px 0;
		}
		&:hover {
			background: transparent;
			color: $second-color;
			border: 2px solid $second-color;
		}
	}
</style>