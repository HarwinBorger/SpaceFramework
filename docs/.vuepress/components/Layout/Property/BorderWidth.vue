<template>
	<Example special element>
		<div class="example-overflow">
				<div class="example-element example-border-width">
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

	.example-border-width {
		@include property(border-width, 1);
		border-color: rgba(red, 0.5);
		border-style: solid;
		box-sizing: border-box;
		line-height: su(2);
		position: relative;;
	}
</style>