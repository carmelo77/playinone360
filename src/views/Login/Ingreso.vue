<template>
	<v-layout class="mt-8" align-center justify-center>
		<v-flex xs12 sm4 md4 lg4 x14>
			<h3 class="primary--text mb-3">Login</h3>
			<v-card>
				<v-toolbar dark color="dark">
					<v-toolbar-title>
						Do you have an account
					</v-toolbar-title>
				</v-toolbar>
				<v-card-text>

					<v-text-field 
						autofocus 
						color="accent" 
						v-model="form.email" 
						label="Email"
						outlined
						dense
						required>
					</v-text-field>

					<v-text-field 
						:type="hiddenPassword ? 'password' : 'text'"
						color="accent" 
						v-model="form.password" 
						outlined
						dense
						:append-icon="hiddenPassword ? 'visibility' : 'visibility_off'"
						@click:append="() => (hiddenPassword = !hiddenPassword)"
						label="Password" 
						required>
					</v-text-field>

					<v-row>
						<v-col cols="12" sm="12" md="6">
							<v-checkbox
								v-model="form.rememberMe"
								label="Remember me"
							>
							</v-checkbox>
						</v-col>
						<v-col cols="12" sm="12" md="6" class="mt-5">
							<a text class="primary--text" @click="rememberPassword">Forgot your password?</a>
						</v-col>
					</v-row>

				</v-card-text>
				<v-card-actions class="px-3 pb-3">
					<v-flex>
						<v-btn color="primary" block rounded @click.prevent="signin()">Login</v-btn>
						<v-btn color="primary" class="mt-5" block rounded outlined @click.prevent="toRegister()">Sign Up</v-btn>
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
					password: '',
					rememberMe: false,
				},

				hiddenPassword: true,
			}
		},

		methods: {
			toRegister() {
				this.$router.push({ name: 'Registro' });
			},
			signin() {
				this.$store.dispatch('login', this.form);
				this.$store.dispatch('autologin');
				this.$router.push({name: "Home"});
			},
			rememberPassword() {
				this.$swal('Recuperar cuenta pronto..');
			}
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