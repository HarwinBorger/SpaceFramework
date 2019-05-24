<template>
	<Example position element>
		<div class="bg-position position-relative example-right-height">
			<div class="example-element example-right position-absolute">{{ content }}</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'Right',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-right {
		@include right(3);
		@include padding(1,1,1,1);
		line-height: su(2);
		left: 0;
	}

	.example-right-height{
		@include height(4);
	}
</style>