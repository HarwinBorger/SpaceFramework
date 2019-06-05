<template>
	<Example padding element>
		<div class="example-overflow bg-padding site-padding border-black">
			<div class="example-element example-name">{{ content }}</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'Name',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-name {
		line-height: su(3);
	}
</style>