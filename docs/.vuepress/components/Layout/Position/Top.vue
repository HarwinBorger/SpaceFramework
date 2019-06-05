<template>
	<Example position element>
		<div class="bg-position position-relative example-top-height">
			<div class="example-element example-top position-absolute">{{ content }}</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'Top',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-top {
		@include top(3);
		@include padding(1,1,1,1);
		line-height: su(2);
		left: 0;
		right: 0;
	}

	.example-top-height{
		@include height(7);
	}
</style>