<template>
	<v-layout class="mt-8" align-center justify-center>
		<v-flex xs12 sm8 md6 lg5 x14>
			<v-card>
				<v-toolbar dark color="dark">
					<v-toolbar-title>
						Registro en el sistema
					</v-toolbar-title>
				</v-toolbar>
				<v-card-text>

					<v-row>
						<v-col cols="12" sm="12" md="6">
							<v-text-field 
								autofocus 
								color="accent" 
								v-model="form.username" 
								label="Username" 
								required>
							</v-text-field>
						</v-col>

						<v-col cols="12" sm="12" md="6">
							<v-text-field 
								autofocus 
								color="accent" 
								v-model="form.email" 
								label="Email" 
								required>
							</v-text-field>
						</v-col>

						<v-col cols="12" sm="12" md="6">
							<v-text-field 
								type="password" 
								color="accent" 
								v-model="form.password" 
								label="Contraseña" 
								required>
							</v-text-field>
							<a class="back-link" @click="goBack" color="primary">
									<small>
										Volver
									</small>
							</a>
						</v-col>

						<v-col cols="12" sm="12" md="6">
							<v-text-field 
								type="password" 
								color="accent" 
								v-model="form.repeatPassword" 
								label="Repetir contraseña" 
								required>
							</v-text-field>
						</v-col>

					</v-row>

				</v-card-text>
				<v-card-actions class="px-3 pb-3">
					<v-flex text-xs-right>
						<v-btn color="dark">Registrame</v-btn>
					</v-flex>
				</v-card-actions>
			</v-card>
		</v-flex>
	</v-layout>
</template>
<script>
	export default {
		data() {
			return {
				form: {
					email: '',
					password: ''
				},
			}
		},

		methods: {
			goBack() {
				this.$router.go(-1);
			}
		}
	}
</script>
	
<style lang="css">
	.back-link {
		text-decoration: none;
	}
</style>