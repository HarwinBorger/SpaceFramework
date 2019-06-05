<template>
	<Example padding element>
		<div class="example-overflow bg-padding medium-section-padding-top border-black">
			<div class="example-element example-medium">{{ content }}</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'Medium',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-medium {
		@include padding(1);
		line-height: su(2);
	}
</style>