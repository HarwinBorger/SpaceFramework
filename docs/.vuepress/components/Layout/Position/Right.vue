<template>
	<Example>
		<div class="example-overflow bg-position example-right">
			<div class="example-element">1 space-unit position on right</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'Position',
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-right {
		@include right(1);
		line-height: su(3);
	}
</style>