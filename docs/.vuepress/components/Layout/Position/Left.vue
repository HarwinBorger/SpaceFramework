<template>
	<Example position element>
		<div class="bg-position position-relative example-left-height">
			<div class="example-element example-left position-absolute">{{ content }}</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'Left',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-left {
		@include left(3);
		@include padding(1,1,1,1);
		line-height: su(2);
		width: auto;
		right: 0;
	}

	.example-left-height{
		@include height(4);
	}
</style>