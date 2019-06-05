<template>
	<Example padding element>
		<div class="example-overflow bg-padding  example-padding-bottom">
			<div class="example-element">1 space-unit padding on bottom</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'PaddingBottom',
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-padding-bottom {
		@include padding-bottom(1);
		line-height: su(3);
	}
</style>