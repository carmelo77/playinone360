<template>
  <v-container>
    <h3 class="mt-3">Resultado hoteles encontrados con "{{ queryString }}"</h3>
		<v-row v-if="data.length">
      <v-col cols="12" sm="4" md="3" v-for="(hotel, index) of displayedHotels" :key="index">
        <card-view :hotel="hotel"></card-view>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12" md="12">
        <v-img
          class="img-notFound my-8"
          max-height="350"
          max-width="450"
          src="../../assets/error-404.png"
        ></v-img>
      </v-col>
      <v-col cols="12" md="12">
        <h3 style="text-align: center;">
          Sin coincidencias.
          <p>
            <v-btn 
            class="mt-3"
              outlined 
              color="dark"
              @click="$router.go(-1)"
            >
              Volver
            </v-btn>
          </p>
        </h3>
      </v-col>
    </v-row>
    <div class="text-center">
      <v-pagination
        v-model="page"
        :length="pages"
        circle
      ></v-pagination>
    </div>
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
        page: 1,
        perPage: 8,
        pages: null
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
      },
      displayedHotels() {
          return this.paginate(this.data);
      }
    },

    watch: {
      'data': function() {
        this.setPages();
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

      },
      setPages() {
          let numberOfPages = Math.ceil(this.data.length / this.perPage);
          this.pages = numberOfPages;
      },
      paginate(data) {
          let page = this.page;
          let perPage = this.perPage;
          let from = (page * perPage) - perPage;
          let to = (page * perPage);
          return data.slice(from, to);
      }
		}
  }
</script>

<style lang="css">
  .img-notFound {
    margin: auto;
  }
</style>