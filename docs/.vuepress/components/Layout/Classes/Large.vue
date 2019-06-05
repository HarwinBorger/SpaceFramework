<template>
	<Example margin element>
		<div class="example-overflow bg-margin ">
			<div class="example-element example-large large-section-margin-vertical border-black">{{ content }}</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'Large',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-large {
		@include padding(1);
		line-height: su(2);
	}
</style>