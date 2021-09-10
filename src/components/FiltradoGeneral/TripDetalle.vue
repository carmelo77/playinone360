<template>
	<v-card
		class="mx-auto my-8"
		max-width="700"
		width="700"
		height="480"
		v-if="result"
	>
		<v-img
			class="white--text align-end"
			height="200px"
			:src="result.banner"
		>
			<v-card-title>
				<h4 :class="result.banner !== undefined ? 'white--text' : 'black--text' ">{{ result.name }}</h4>
			</v-card-title>
		</v-img>

		<v-row>
			<v-col>
				<v-img
					class="img-main"
					max-height="150"
					max-width="270"
					:src="result.photo"
				></v-img>

				<v-card-subtitle class="pb-0">
					{{ result.place }} {{ result.resourceName }}
				</v-card-subtitle>

				<v-card-text class="grey--text">
					<div>{{ result.description }}</div>
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
		result: {
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

	mounted() {
		const { name, email } = JSON.parse(localStorage.getItem('user'));

		this.form.name = name;
		this.form.email = email;
	},

	methods: {
		reserve() {
			if(this.form.name && this.form.email) {
				this.$swal({
					title: "Éxito",
					text: "Has reservado correctamente."
				});

				return;
			}

			this.$swal({
				title: "Oops",
				text: "Sí aún no posees una cuenta, registrate!"
			});

			this.$router.push({ name: 'Registro' });
		}
	}
}
</script>