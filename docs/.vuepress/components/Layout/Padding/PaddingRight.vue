<template>
	<Example>
		<div class="example-overflow bg-padding example-padding-right">
			<div class="example-element">1 space-unit padding on right</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'Padding',
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-padding-right {
		@include padding-right(1);
		line-height: su(3);
	}
</style>