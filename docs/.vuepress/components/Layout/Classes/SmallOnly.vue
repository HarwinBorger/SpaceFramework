<template>
	<Example padding element>
		<div class="example-overflow bg-padding small-only-block-padding border-black">
			<div class="example-element example-small-only">{{ content }}</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'SmallOnly',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-small-only {
		@include padding(1);
		line-height: su(2);
	}
</style>