<template>
  <v-container>
			<v-data-table
				:headers="headers"
				:items="golf_fields"
				item-key="name"
				class="elevation-1 mt-3"
				:search="search"
			>
				<template v-slot:top>
					<v-toolbar flat>
						<v-toolbar-title>Lista de campos de golf encontrados</v-toolbar-title>
						<v-divider
							class="mx-4"
							inset
							vertical
						></v-divider>

						<v-spacer></v-spacer>

						<v-text-field
							v-model="search"
							label="Filtrar"
							append-icon="search"
							dense
							class="mx-4 mt-4"
						></v-text-field>

					</v-toolbar>
				</template>

				<template v-slot:item.reserve="props">
					<v-btn
						outlined
						color="dark"
						fab
						small
						class="search-btn"
						@click="doReserveIt"
					>
						<v-icon>
							book_online
						</v-icon>
					</v-btn>
				</template>

			</v-data-table>
	</v-container>
</template>

<script>
  export default {
    data () {
      return {
        search: '',
        golf_fields: [
          {
            name: 'Campo 1',
            place: 'Madrid',
            dimensions: 6.0,
            phone: 24
          },
          {
            name: 'Campo 2',
            place: 'Madrid',
            dimensions: 9.0,
            phone: 37
          },
          {
            name: 'Campo 3',
            place: 'Madrid',
            dimensions: 16.0,
            phone: 23
          },
          {
            name: 'Campo 4',
            place: 'Madrid',
            dimensions: 3.7,
            phone: 67
          },
          {
            name: 'Campo 5',
            place: 'Madrid',
            dimensions: 16.0,
            phone: 49
          },
          {
            name: 'Campo 6',
            place: 'Madrid',
            dimensions: 0.0,
            phone: 94
          },
          {
            name: 'Campo 7',
            place: 'Madrid',
            dimensions: 0.2,
            phone: 98
          },
          {
            name: 'Campo 8',
            place: 'Madrid',
            dimensions: 3.2,
            phone: 87
          },
          {
            name: 'Campo 9',
            place: 'Madrid',
            dimensions: 25.0,
            phone: 51
          },
          {
            name: 'Campo 10',
            place: 'Madrid',
            dimensions: 26.0,
            phone: 65
          },
        ],
      }
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
    },

		methods: {
			doReserveIt() {
				this.$router.push({ name: 'Login' });
			}
		}
  }
</script>