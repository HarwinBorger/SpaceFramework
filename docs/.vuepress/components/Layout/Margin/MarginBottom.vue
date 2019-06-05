<template>
	<Example margin element>
		<div class="example-overflow bg-margin">
			<div class="example-element example-margin-bottom">1 space-unit margin on bottom</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'MarginBottom',
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-margin-bottom {
		@include margin-bottom(1);
		@include padding(1);
		line-height: su(2);
	}
</style>