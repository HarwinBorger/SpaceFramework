<template>
	<Example padding element>
		<div class="example-overflow bg-padding example-padding-vertical">
			<div class="example-element">{{ content }}</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'PaddingVertical',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-padding-vertical {
		@include padding-vertical(2);
		line-height: su(3);
	}
</style>