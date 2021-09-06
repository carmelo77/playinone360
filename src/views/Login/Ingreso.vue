<template>
	<v-layout class="mt-8" align-center justify-center>
		<v-flex xs12 sm8 md6 lg5 x14>
			<v-card>
				<v-toolbar dark color="dark">
					<v-toolbar-title>
						Acceso al sistema
					</v-toolbar-title>
				</v-toolbar>
				<v-card-text>

					<v-text-field 
						autofocus 
						color="accent" 
						v-model="form.email" 
						label="Email" 
						required>
					</v-text-field>

					<v-text-field 
						type="password" 
						color="accent" 
						v-model="form.password" 
						label="Password" 
						required>
					</v-text-field>
					<a class="registry-link" @click="toRegister">
							<small>
							¿Aún no posees una cuenta?
						</small>
					</a>

				</v-card-text>
				<v-card-actions class="px-3 pb-3">
				<v-flex text-xs-right>
					<v-btn color="dark" @click.prevent="signin()">Ingresar</v-btn>
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
			toRegister() {
				this.$router.push({ name: 'Registro' });
			},
			signin() {}
		}
	}
</script>

<style lang="css">
	.registry-link {
		text-decoration: none;
	}

	.registry-link small {
		color: gray;
	}
</style>