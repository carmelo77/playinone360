<template>
  <v-container>
    <h3 class="mt-3" v-if="golf">{{ golf.slots }}</h3>
    <!--<v-row>
      <card-view-detalle v-if="golfID" :golf="golf"></card-view-detalle>
    </v-row> -->
  </v-container>
</template>

<script>
import { golfs } from '@/helpers/data';

  export default {
    components: {
      CardViewDetalle: () => import('@/components/Hotels/CardViewDetalle')
    },
		data() {
			return {
				golfID: '',
				golf: null,
			}
		},
		mounted() {
			this.golfID = this.$route.params.id;
		},
		watch: {
			'golfID': function() {
				this.getGolfByID();
			}
		},
		methods: {
			getGolfByID() {
				const data = golfs.find(golf => this.golfID == golf.id);

				this.golf = data;
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