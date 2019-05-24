<template>
	<Example margin element>
		<div class="example-overflow bg-margin">
			<div class="example-element example-margin-top">1 space-unit margin on top</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'MarginTop',
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-margin-top {
		@include margin-top(1);
		@include padding(1);
		line-height: su(2);
	}
</style>