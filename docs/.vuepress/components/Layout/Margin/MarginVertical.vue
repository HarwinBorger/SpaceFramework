<template>
	<Example margin element>
		<div class="example-overflow bg-margin">
			<div class="example-element example-margin-vertical">{{ content }}</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'MarginVertical',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-margin-vertical {
		@include margin-vertical(2);
		@include padding(1);
		line-height: su(2);
	}
</style>