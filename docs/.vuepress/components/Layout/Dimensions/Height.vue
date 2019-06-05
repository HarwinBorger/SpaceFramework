<template>
	<Example element raster>
		<div class="example-overflow bg-height">
			<div class="example-group">
				<div class="example-element example-height">{{ content }}</div>
				<div class="example-element example-2-height">10 space-units height</div>
				<div class="example-element example-3-height">15 space-units height</div>
			</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'Height',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-height {
		box-sizing: border-box;
		@include width(10);
		@include height(5);
		@include padding(1);
		line-height: su(1.5);
	}

	.example-2-height {
		box-sizing: border-box;
		@include width(10);
		@include height(10);
		@include padding(1);
		line-height: su(1.5);
	}

	.example-3-height {
		box-sizing: border-box;
		@include width(10);
		@include height(15);
		@include padding(1);
		line-height: su(1.5);
	}
</style>