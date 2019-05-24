<template>
	<Example margin element>
		<div class="example-overflow bg-margin">
			<div class="example-element example-margin-horizontal">{{ content }}</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'MarginHorizontal',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-margin-horizontal {
		@include margin-horizontal(2);
		@include padding(1);
		line-height: su(2);
	}
</style>