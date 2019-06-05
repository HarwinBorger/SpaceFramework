<template>
	<Example margin element>
		<div class="example-overflow bg-margin">
			<div class="example-element example-margin-right">1 space-unit margin on right</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'MarginRight',
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-margin-right {
		@include margin-right(1);
		@include padding(1);
		line-height: su(2);
	}
</style>