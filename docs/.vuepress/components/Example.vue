<template>
	<div class="example-container">
		<div class="example bg-units-light">
			<slot></slot>
		</div>
		<Legend></Legend>
	</div>
</template>
<script>
	import Legend from './Legend'

	export default {
		name: 'Example',
		components: {
			Legend
		}
	}
</script>