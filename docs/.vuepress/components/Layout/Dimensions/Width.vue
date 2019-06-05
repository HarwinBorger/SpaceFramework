<template>
	<Example element raster>
		<div class="example-overflow bg-width">
			<div class="example-group">
				<div class="example-element example-width">{{ content }}</div>
				<div class="example-element example-2-width">20 space-units width</div>
				<div class="example-element example-3-width">15 space-units width</div>
			</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'Width',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-width {
		box-sizing: border-box;
		@include width(10);
		@include padding(1);
		line-height: su(1.5);
	}

	.example-2-width {
		box-sizing: border-box;
		@include width(20);
		@include padding(1);
		line-height: su(1.5);
	}

	.example-3-width {
		box-sizing: border-box;
		@include width(15);
		@include padding(1);
		line-height: su(1.5);
	}
</style>