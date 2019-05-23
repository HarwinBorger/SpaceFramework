<template>
	<div class="example-container">
		<div class="example bg-units-light">
			<div class="example-overflow bg-margin">
				<div class="example-element example-margin-bottom">1 space-unit margin on bottom</div>
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

	.example-margin-bottom {
		@include margin-bottom(1);
		@include padding(1);
		line-height: su(2);
	}
</style>