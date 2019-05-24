<template>
	<Example>
		<div class="example-overflow bg-position example-left">
			<div class="example-element">1 space-unit position on left</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'PositionLeft',
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-left {
		@include left(1);
		line-height: su(3);
	}
</style>