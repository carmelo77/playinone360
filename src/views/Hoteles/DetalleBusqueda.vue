<template>
  <v-container>
    <h3 class="mt-3" v-if="hotel">{{ hotel.name }}</h3>
    <v-row>
      <card-view-detalle v-if="hotelID" :hotel="hotel"></card-view-detalle>
    </v-row>
  </v-container>
</template>

<script>
import { hotels } from '@/helpers/data';

  export default {
    components: {
      CardViewDetalle: () => import('@/components/Hotels/CardViewDetalle')
    },
		data() {
			return {
				hotelID: '',
				hotel: null,
			}
		},
		mounted() {
			this.hotelID = this.$route.params.id;
		},
		watch: {
			'hotelID': function() {
				this.getHotelByID();
			}
		},
		methods: {
			getHotelByID() {
				const data = hotels.find(hotel => this.hotelID == hotel.id);

				this.hotel = data;
			}
		}
  }
</script>

<style lang="css">
  .img-main {
    margin-left: 12px;
    margin-top: 12px;
  }

  h4 {
    text-align: center;
  }
  
  .form {
    margin: auto;
  }
</style>