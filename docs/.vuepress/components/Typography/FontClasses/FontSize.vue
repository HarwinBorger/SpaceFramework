<template>
	<Example raster small>
		<div class="align-baseline">
			<div class="font-size-xlarge">xLarge</div>
			<div class="font-size-large">large</div>
			<div class="font-size-medium">medium</div>
			<div class="font-size-default">default</div>
			<div class="font-size-small">small</div>
			<div class="font-size-tiny">tiny</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'FontSize',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";
</style>