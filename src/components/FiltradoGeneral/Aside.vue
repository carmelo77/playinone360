<template>
	<div>
		<h4 class="grey--text mt-4">FILTER RESULTS</h4>
		<div class="checkbox--selector mb-5">
			<div class="font-weight-medium mt-3">View by</div>
			<div class="mt-3">
				<a class="primary--text clear-link">Clear</a>
			</div>
		</div>
		<v-checkbox
			label="Hotel"
			v-model="viewBy"
			value="hotel"
			multiple
			append-icon="apartment"
		>
		</v-checkbox>
		<v-checkbox
			label="Golf Course resorts"
			v-model="viewBy"
			value="golf"
			multiple
			append-icon="sports_golf"
		>
		</v-checkbox>
		<v-checkbox
			label="Resorts"
			v-model="viewBy"
			value="resorts"
			multiple
			append-icon="beach_access"
		>
		</v-checkbox>
		<v-checkbox
			label="Package"
			v-model="viewBy"
			value="package"
			multiple
			append-icon="lock"
		>
		</v-checkbox>
		<h4 class="black--text font-weight-medium mt-4">Destiny by country</h4>
		<v-checkbox
			label="Spain"
		>
		</v-checkbox>
		<v-checkbox
			label="Portugal"
		>
		</v-checkbox>
		<h4 class="black--text font-weight-medium mt-4">Trending destinations</h4>
		<v-checkbox
			label="Costa del Sol"
		>
		</v-checkbox>
		<v-checkbox
			label="Costa brava"
		>
		</v-checkbox>
		<v-checkbox
			label="Murcia"
		>
		</v-checkbox>
		<v-checkbox
			label="More"
		>
		</v-checkbox>

		<v-btn class="mt-3" color="dark" outlined rounded >Back to top</v-btn>
	</div>
</template>

<script>
export default {
	data() {
		return {
			viewBy: [],
		}
	},
	watch: {
		'viewBy': function() {
			this.sendViewBy();
		}
	},
	methods: {
		sendViewBy() {
			this.$emit('fillData', this.viewBy);
		}
	}
}
</script>