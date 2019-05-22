<template>
	<div class="margin">I am a responsive Margin made from SpaceUnits</div>
</template>
<style lang="scss">
	@import "../../../../../scss/init";
	@include space-unit-variables();

	.margin {
		margin-top: su(3);
		line-height: su(3);
	}
</style>