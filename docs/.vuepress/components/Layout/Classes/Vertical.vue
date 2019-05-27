<template>
	<Example margin element>
		<div class="example-overflow bg-margin">
			<div class="example-element section-margin-vertical example-section-margin-vertical  border-black">{{ content }}</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'SectionMarginVertical',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-section-margin-vertical{
		@include padding(1);
		line-height: su(2);
		box-sizing: border-box;
	}
</style>