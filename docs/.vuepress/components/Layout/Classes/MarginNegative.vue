<template>
	<Example margin element>
		<div class="section-padding bg-padding">
			<div class="bg-margin">
				<div
					class="example-element section-margin-left-negative example-section-margin-left-negative border-black">
					{{ content }}
				</div>
			</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'MarginNegative',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-section-margin-left-negative {
		@include padding(1);
		line-height: su(2);
		box-sizing: border-box;
		position: relative;
		z-index: 20;
	}
</style>