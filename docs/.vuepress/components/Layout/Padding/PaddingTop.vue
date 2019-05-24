<template>
	<Example padding element>
		<div class="example-overflow bg-padding example-padding-top">
			<div class="example-element">1 space-unit padding on top</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'PaddingTop',
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-padding-top {
		@include padding-top(1);
		line-height: su(3);
	}
</style>