<template>
	<v-card
		class="mx-auto my-8"
		max-width="700"
		height="480"
		v-if="hotel"
	>
		<v-img
			class="white--text align-end"
			height="200px"
			:src="hotel.banner"
		>
			<v-card-title>{{ hotel.name }}</v-card-title>
		</v-img>

		<v-row>
			<v-col>
				<v-img
					class="img-main"
					max-height="150"
					max-width="270"
					:src="hotel.photo"
				></v-img>

				<v-card-subtitle class="pb-0">
					{{ hotel.place }}
				</v-card-subtitle>

				<v-card-text class="grey--text">
					<div>{{ hotel.description }}</div>
				</v-card-text>
			</v-col>
			<v-col>
				<h4 class="mt-3">Información personal</h4>
				<v-container>
					<v-row>
						<v-form class="form">
							<v-text-field
								v-model="form.name"
								label="Nombre"
								required
							></v-text-field>
							<v-text-field
								v-model="form.email"
								label="Email"
								required
							></v-text-field>
							<div>
								<h2>
									$33
								</h2>
							</div>
							<v-btn 
								color="dark"
								class="mt-2"
								outlined
								block
								@click="reserve"
							>
								Reservar
							</v-btn>
						</v-form>
					</v-row>
				</v-container>
			</v-col>
		</v-row>
	</v-card>
</template>

<script>
export default {
	props: {
		hotel: {
			type: Object,
			requierd: true,
		}
	},
	data() {
		return {
			form: {
				name: '',
				email: '',
			}
		}
	},

	methods: {
		reserve() {
			this.$swal({
				title: "Oops",
				text: "Sí aún no posees una cuenta, registrate!"
			});

			this.$router.push({ name: 'Registro' });
		}
	}
}
</script>