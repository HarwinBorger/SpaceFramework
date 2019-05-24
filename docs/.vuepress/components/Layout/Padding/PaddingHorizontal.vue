<template>
	<Example padding element>
		<div class="example-overflow bg-padding example-padding-horizontal">
			<div class="example-element">{{ content }}</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'PaddingHorizontal',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-padding-horizontal {
		@include padding-horizontal(2);
		line-height: su(3);
	}
</style>