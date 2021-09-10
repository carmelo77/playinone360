<template>
	<v-container>
		<v-row>

			<v-col cols="12" sm="12" md="3" lg="2">
				<aside-check @fillData="fillData"></aside-check>
			</v-col>

			<v-col cols="12" sm="12" md="10" lg="10">

				<h2 class="primary--text mt-5 mb-3">Trending Packages</h2>
				<v-row>
					<v-col 
						class="d-flex child-flex" 
						cols="2" 
						v-for="(item, index) of trendingdata" 
						:key="index"
					>
						<trending-img v-if="item" :trending="item"></trending-img>
					</v-col>
				</v-row>

				<h2 class="primary--text mt-3 mb-3">Our Trips</h2>
				<v-row>
					<v-col 
						cols="12" 
						sm="4" 
						md="4" 
						v-for="(filtered, index) of tripsdata" 
						:key="index"
					>
						<trips-cards :filtered="filtered"></trips-cards>
					</v-col>
					<v-flex class="text-center" v-if="!tripsdata.length">
						<h3 class="text-center">Aún no has buscado nada.</h3>
					</v-flex>
				</v-row>

			</v-col>
		</v-row>
	</v-container>
</template>

<script>
import { trending, hotels, golfs } from '@/helpers/data';

export default {
	components: { 
		TrendingImg: () => import('@/components/FiltradoGeneral/Trending'),
		AsideCheck: () => import('@/components/FiltradoGeneral/Aside'),
		TripsCards: () => import('@/components/FiltradoGeneral/Trips')
	},
	data() {
		return {
			trendingdata: [],
			tripsdata: [],
		}
	},

	mounted() {
		this.trendingdata = trending;
		//this.tripsdata = hotels;
	},

	methods: {
		fillData(data) {
			this.tripsdata = [];
			if(data.includes('hotel')) {
				this.tripsdata = [
					...hotels
				];
			}

			if(data.includes('golf')) {
				this.tripsdata = [
					...this.tripsdata,
					...golfs
				];
			}
		},
	}
}
</script>

<style lang="css">
	.checkbox--selector {
		display: flex;
		justify-content: space-between;
	}

	.clear-link {
		border-bottom: 2px solid;
	}

	.v-input--selection-controls {
		margin-top: 10px !important;
		padding-top: 0px !important;
	}

	.v-messages {
		min-height: 0 !important;
	}
</style>