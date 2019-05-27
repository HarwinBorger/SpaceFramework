<template>
	<div class="example-container">
		<div class="example bg-units" v-bind:class="{'bg-units-small': small}">
			<div v-if="raster" class="bg-units-large bg-overlay"></div>
			<div v-if="vertical" class="bg-units-vertical bg-overlay"></div>
			<slot></slot>
		</div>
		<div class="example-container__legend">
			<template v-if="margin"><span class="unit unit-margin"></span> Margin</template>
			<template v-if="padding"><span class="unit unit-padding"></span> Padding</template>
			<template v-if="position"><span class="unit unit-position"></span> Position</template>
			<template v-if="special"><span class="unit unit-special"></span> Special</template>
			<template v-if="element"><span class="unit unit-element"></span> Example element</template>
		</div>
	</div>
</template>
<script>

	export default {
		name: 'Example',
		props: {
			margin: Boolean,
			padding: Boolean,
			position: Boolean,
			special: Boolean,
			element: Boolean,
			raster: Boolean,
			vertical: Boolean,
			small: Boolean,
		}
	}
</script>