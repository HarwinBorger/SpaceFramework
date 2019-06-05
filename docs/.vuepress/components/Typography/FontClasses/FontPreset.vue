<template>
	<Example raster small>
		<div class="align-baseline">
			<div class="font-preset-xlarge">xLarge</div>
			<div class="font-preset-large">large</div>
			<div class="font-preset-medium">medium</div>
			<div class="font-preset-default">default</div>
			<div class="font-preset-small">small</div>
			<div class="font-preset-tiny">tiny</div>
		</div>
	</Example>
</template>
<script>
	import Example from '../../Example'

	export default {
		name: 'FontPreset',
		props: ['content'],
		components: {
			Example
		}
	}
</script>
<style lang="scss">
	@import "../../../scss/init";
</style>