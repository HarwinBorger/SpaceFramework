<template>
	<Example position element>
		<div class="bg-position position-relative example-bottom-height">
			<div class="example-element example-bottom position-absolute">{{ content }}</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'Bottom',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-bottom {
		@include bottom(3);
		@include padding(1,1,1,1);
		line-height: su(2);
		left: 0;
		right: 0;
	}

	.example-bottom-height{
		@include height(7);
	}
</style>