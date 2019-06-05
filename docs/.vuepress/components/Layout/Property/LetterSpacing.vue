<template>
	<Example vertical>
		<div class="example-overflow">
			<div class="example-cleanelement">
				<span class="example-letter-spacing">
					{{ content }}
				</span>
			</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'LetterSpacing',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-letter-spacing {
		@include property(letter-spacing, 1);
		box-sizing: border-box;
		line-height: su(2);
		position: relative;
	}
</style>