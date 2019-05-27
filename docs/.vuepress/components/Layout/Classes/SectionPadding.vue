<template>
	<Example padding element>
		<div class="example-overflow bg-padding section-padding  border-black">
			<div class="example-element example-section-padding ">{{ content }}</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'SectionPadding',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-section-padding{
		@include padding(1);
		line-height: su(2);
		box-sizing: border-box;
	}
</style>