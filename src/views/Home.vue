<template>
	<div>
		<h3 class="title">{{ title }}</h3>
	</div>
</template>

<script>
export default {
	computed: {
		title() {
			return 'Main Page';
		}
	}
}
</script>

<style lang="css">
	.title {
		padding: 12px;
	}
</style>