<template>
	<Example padding element>
		<div class="example-overflow bg-padding example-padding-left">
			<div class="example-element">1 space-unit padding on left</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'PaddingLeft',
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-padding-left {
		@include padding-left(1);
		line-height: su(3);
	}
</style>