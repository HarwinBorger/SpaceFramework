<template>
	<Example margin element>
		<div class="example-overflow bg-margin">
			<div class="example-element section-margin-bottom example-section-margin-bottom  border-black">{{ content }}</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'SectionMarginBottom',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-section-margin-bottom{
		@include padding(1);
		line-height: su(2);
		box-sizing: border-box;
	}
</style>