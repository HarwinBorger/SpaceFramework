<template>
	<Example margin element>
		<div class="example-overflow bg-margin">
			<div class="example-element example-margin">{{ content }}</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'Margin',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-margin {
		@include margin(5, 1, 1, 1);
		@include padding(1);
		line-height: su(2);
	}
</style>