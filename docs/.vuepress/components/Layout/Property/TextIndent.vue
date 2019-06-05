<template>
	<Example special raster>
		<div class="example-overflow">
				<div class="example-cleanelement example-text-indent">
					{{ content }}
				</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'TextIndent',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-text-indent {
		@include property(text-indent, 3);
		box-sizing: border-box;
		line-height: su(2);
		position: relative;;

		&::before {
			position: absolute;
			@include width(3);
			@include height(2);
			@include left(0);
			content: '';
			background: rgba(red, 0.5);
		}
	}
</style>