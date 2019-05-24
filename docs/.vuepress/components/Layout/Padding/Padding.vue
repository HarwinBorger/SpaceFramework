<template>
	<Example padding element>
		<div class="example-overflow bg-padding  example-padding">
			<div class="example-element">{{ content }}</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'Padding',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-padding {
		@include padding(1, 2, 1, 2);
		line-height: su(3);
	}
</style>