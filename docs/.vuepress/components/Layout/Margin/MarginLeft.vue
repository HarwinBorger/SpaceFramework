<template>
	<div class="example-container">
		<div class="example bg-units-light">
			<div class="example-overflow bg-margin">
				<div class="example-element example-margin-left">1 space-unit margin on left</div>
			</div>
		</div>
		<Legend></Legend>
	</div>
</template>
<script>
	import Legend from '../../Legend'

	export default {
		name: 'Margin',
		components: {
			Legend
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";

	.example-margin-left {
		@include margin-left(1);
		@include padding(1);
		line-height: su(2);
	}
</style>