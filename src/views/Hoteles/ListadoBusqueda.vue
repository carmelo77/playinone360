<template>
  <v-container>
    <h3 class="mt-3">Resultado hoteles encontrados con "{{ queryString }}"</h3>
		<v-row>
      <v-col cols="12" sm="4" md="3" v-for="(hotel, index) of data" :key="index">
        <card-view :hotel="hotel"></card-view>
      </v-col>
    </v-row>
	</v-container>
</template>

<script>
import { hotels } from '@/helpers/data';

  export default {
    components: { 
      CardView: () => import('@/components/Hotels/CardView')
    },
    data () {
      return {
        data: [],
        queryString: '',
      }
    },
    mounted() {
      const { current: { query } } = this.$router.history;
      this.queryString = query.search;
      this.index(this.queryString);
    },
    computed: {
      headers () {
        return [
          { text: 'Nombre', value: 'name' },
          { text: 'Lugar', value: 'place' },
          { text: 'Dimensiones', value: 'dimensions' },
          { text: 'Telefono', value: 'phone' },
					{ text: 'Reservar', value: 'reserve' }
        ]
      }
    },

		methods: {
			doReserveIt() {
				this.$router.push({ name: 'Login' });
			},

      index(search) {
        const s = search.toLowerCase();
        const found = hotels.filter(hotel => hotel.name.toLowerCase().includes(s));
        this.data = found;

      }
		}
  }
</script>