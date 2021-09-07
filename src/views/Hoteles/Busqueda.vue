<template>
  <v-container>
    <h3>Buscar Hoteles</h3>
    <v-row>
      <v-col cols="12" sm="12" md="10">
          <v-text-field 
            class="text-xs-center mt-5" 
            v-model="search" 
            append-icon="search" 
            label="Ingresa el nombre del campo a buscar" 
            dense
            outlined
          >
          </v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="2">
        <v-btn
          outlined
          color="dark"
          class="search-btn mt-5"
          @click="doSearch"
        >
          Realizar búsqueda
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'Home',
    data() {
      return {
        search: '',
      }
    },

    methods: {
      doSearch() {
        if(this.search !== '' && this.search.length > 3) {
          this.$router.push({
            name: 'HotelesResultados', query: { search: this.search } 
          });
          return;
        }

        this.$swal({
          title: 'Error',
          text: 'El campo de búsqueda está vacío o es menor a 3 caracteres.',
          icon: 'error'
        });
      }
    }
  }
</script>

<style lang="css">
  .search-btn {
    height: 40px !important;
  }
</style>
