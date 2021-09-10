<template>
	<div>
		<v-img
			:src="trending.photo"
			aspect-ratio="1"
			class="grey lighten-2"
		>
		</v-img>
		{{ trending.name }}
	</div>
</template>
<script>
export default {
	props: {
		trending: {
			type: Object,
			required: true,
		}
	}
}
</script>