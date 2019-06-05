<template>
	<Example margin element>
		<div class="example-overflow bg-margin">
			<div class="example-element section-margin-horizontal example-section-margin-horizontal  border-black">{{ content }}</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'SectionMarginHorizontal',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-section-margin-horizontal{
		@include padding(1);
		line-height: su(2);
		box-sizing: border-box;
	}
</style>