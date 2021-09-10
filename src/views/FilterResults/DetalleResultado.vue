<template>
  <v-container>
    <h3 class="mt-3" v-if="result">{{ result.name }}</h3>
    <v-row>
      <trip-detalle v-if="resultID" :result="result"></trip-detalle>
    </v-row>
  </v-container>
</template>

<script>
import { hotels, golfs } from '@/helpers/data';

  export default {
    components: {
      TripDetalle: () => import('@/components/FiltradoGeneral/TripDetalle')
    },
		data() {
			return {
				resultID: '',
				resultSearch: '',
				result: null,
			}
		},
		mounted() {
			this.resultID = this.$route.params.id;
			this.resultSearch = this.$route.params.search;
		},
		watch: {
			'resultID': function() {
				this.getResultByID();
			}
		},
		methods: {
			getResultByID() {
				let data = null;

				if(this.resultSearch == 'hotel') {
					data = hotels.find(hotel => this.resultID == hotel.id);
				} else {
					data = golfs.find(golf => this.resultID == golf.id);
				}

				this.result = data;
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