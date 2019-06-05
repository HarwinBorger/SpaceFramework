<template>
	<Example position element>
		<div class="example-overflow bg-position position-relative example-section-position-container">
			<div class="example-element section-position example-section-position position-absolute  border-black">{{ content }}</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'SectionPosition',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-section-position-container{
		@include height(12);
	}

	.example-section-position{
		@include padding(1);
		line-height: su(2);
		box-sizing: border-box;
	}
</style>