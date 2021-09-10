<template>
  <v-container>
    <h3 class="mt-3">Resultado campos de golf encontrados con slot "{{ queryString }}"</h3>
		<v-row v-if="data.length">
      <v-col cols="12" sm="4" md="3" v-for="(golf, index) of displayedFieldGolf" :key="index">
        <card-view :golf="golf"></card-view>
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
				class="mt-5"
        :length="pages"
        circle
      ></v-pagination>
    </div>
	</v-container>
</template>

<script>
import { golfs } from '@/helpers/data';

  export default {
    components: { 
      CardView: () => import('@/components/Golfs/CardView')
    },
    data () {
      return {
        data: [],
        queryString: '',
        page: 1,
        perPage: 12,
        pages: null
      }
    },
    mounted() {
      const { current: { query } } = this.$router.history;
      this.queryString = query.search;
      this.index(this.queryString);
    },
    computed: {
      displayedFieldGolf() {
          return this.paginate(this.data);
      }
    },

    watch: {
      'data': function() {
        this.setPages();
      }
    },

		methods: {
      index(search) {
        const found = golfs.filter(golf => golf.slots == search);
        this.data = found;
				console.log(found);

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