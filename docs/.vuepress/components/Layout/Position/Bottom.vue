<template>
	<Example>
		<div class="example-overflow bg-position example-bottom">
			<div class="example-element">1 space-unit position on bottom</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'Bottom',
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-bottom {
		@include bottom(1);
		line-height: su(3);
	}
</style>