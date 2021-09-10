<template>
  <v-card
    class="mx-auto my-8"
    max-width="324"
  >
    <v-card-title>{{ golf.slots }}</v-card-title>

    <v-card-text>
      <div class="my-4 text-subtitle-1">
				<v-icon>calendar_today</v-icon>
        {{ golf.date }}
      </div> 
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="blue-grey darken-4 lighten-2"
        text
				@click="getGolfByID(golf.id)"
      >
        Ver más
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
		props: {
			golf: {
				type: Object,
				required: true,
			}
		},
    methods: {
			getGolfByID(id) {
        this.$swal('Servicio en mantenimiento');
				//this.$router.push({ name: 'DetalleGolf', params: { id: id } });
			}
		}
  }
</script>