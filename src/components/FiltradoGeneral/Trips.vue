<template>
  <v-card
    class="mx-auto my-8"
    max-width="324"
  >
    <v-img
      height="160"
      :src="filtered.photo"
    ></v-img>

    <v-card-title>{{ filtered.name }}</v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>

      <div class="my-4 text-subtitle-1">
				<v-icon>place</v-icon>
        {{ filtered.place }}
      </div> 

      <div class="mt-4">
				{{ filtered.description }}
			</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="blue-grey darken-4 lighten-2"
        text
				@click="getInfoFilteredByID(filtered)"
      >
        Ver más
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
		props: {
			filtered: {
				type: Object,
				required: true,
			}
		},
    methods: {
			getInfoFilteredByID(data) {
				const search = data.idType !== undefined ? 'golf' : 'hotel';

				this.$router.push({ name: 'ResultadoDetalle', params: { search, id: data.id } });
			}
		}
  }
</script>