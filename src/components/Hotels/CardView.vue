<template>
  <v-card
    class="mx-auto my-8"
    max-width="324"
  >
    <v-img
      height="180"
      :src="hotel.photo"
    ></v-img>

    <v-card-title>{{ hotel.name }}</v-card-title>

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
        {{ hotel.place }}
      </div> 

      <div class="mt-4">
				{{ hotel.description }}
			</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-actions>
      <v-btn
        color="blue-grey darken-4 lighten-2"
        text
				@click="getHotelDetailByID(hotel.id)"
      >
        Ver más
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
		props: {
			hotel: {
				type: Object,
				required: true,
			}
		},
    methods: {
			getHotelDetailByID(id) {
				this.$router.push({ name: 'DetalleHotel', params: { id: id } });
			}
		}
  }
</script>