<template>
	<Example margin element>
		<div class="example-overflow bg-margin">
			<div class="example-element example-margin-left">1 space-unit margin on left</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'MarginLeft',
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-margin-left {
		@include margin-left(1);
		@include padding(1);
		line-height: su(2);
	}
</style>