<template>
	<v-layout class="mt-8" align-center justify-center>
		<v-flex xs12 sm8 md6 lg5 x14>
			<v-card>
				<v-toolbar dark color="dark">
					<v-toolbar-title>
						Create an account
					</v-toolbar-title>
				</v-toolbar>
				<v-card-text>

					<v-row>
						<v-col cols="12" sm="12" md="12">
							<v-text-field 
								autofocus 
								color="accent" 
								v-model="form.name" 
								label="Name"
								class="first" 
								required
								outlined
								dense>
							</v-text-field>
							<div 
								class="red--text" 
								v-if="errors.name !== undefined"
							>
								{{ errors.name }}
							</div>
						</v-col>

						<!--<v-col cols="12" sm="12" md="12">
							<v-text-field  
								color="accent" 
								v-model="form.address" 
								label="Address" 
								required
								outlined
								dense>
							</v-text-field>
							<div 
								class="red--text" 
								v-if="errors.address !== undefined"
							>
								{{ errors.address }}
							</div>
						</v-col> -->

						<v-col cols="12" sm="12" md="12">
							<v-text-field  
								color="accent" 
								v-model="form.email" 
								label="E-mail" 
								required
								outlined
								dense>
							</v-text-field>
							<div 
								class="red--text" 
								v-if="errors.email !== undefined"
							>
								{{ errors.email }}
							</div>
						</v-col>

						<v-col cols="12" sm="12" md="12">
							<v-text-field  
								color="accent"
								type="email"
								v-model="form.confirmEmail"
								label="Confirm E-mail" 
								autocomplete="new-email"
								onpaste="return false"
								required
								outlined
								dense>
							</v-text-field>
							<div 
								class="red--text" 
								v-if="errors.confirmEmail !== undefined"
							>
								{{ errors.confirmEmail }}
							</div>
						</v-col>

						<v-col cols="12" sm="12" md="12">
							<v-text-field 
								:type="hiddenPassword ? 'password' : 'text'"
								color="accent" 
								v-model="form.password" 
								label="Password"
								:append-icon="hiddenPassword ? 'visibility' : 'visibility_off'"
								@click:append="() => (hiddenPassword = !hiddenPassword)"
								required
								outlined
								dense>
							</v-text-field>
							<div 
								class="red--text" 
								v-if="errors.password !== undefined"
							>
								{{ errors.password }}
							</div>
						</v-col>

						<v-col cols="12" sm="12" md="12">
							<v-text-field 
								:type="hiddenPasswordConfirm ? 'password' : 'text'"
								color="accent"
								v-model="form.confirmPassword" 
								label="Confirm Password" 
								:append-icon="hiddenPasswordConfirm ? 'visibility' : 'visibility_off'"
								@click:append="() => (hiddenPasswordConfirm = !hiddenPasswordConfirm)"
								required
								outlined
								dense>
							</v-text-field>
							<div 
								class="red--text" 
								v-if="errors.confirmPassword !== undefined"
							>
								{{ errors.confirmPassword }}
							</div>
						</v-col>

						<v-col cols="12" sm="12" md="12">

							<v-checkbox
								v-model="form.termsAndConditions"
								label="I accept terms and conditions"
							>
							</v-checkbox>

							<v-checkbox
								v-model="form.privacyPolicy"
								label="I accept privacy policy"
							>
							</v-checkbox>
						</v-col>
					</v-row>

				</v-card-text>
				<v-card-actions class="px-3 pb-3">
					<v-flex text-xs-right>
						<v-btn 
							color="primary"
							block 
							rounded
							@click.prevent="register()"
						>
							Register
						</v-btn>
						<ul v-for="(reg,index) of registros" :key="index">
							<li>{{ reg.name }}</li>
						</ul>
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
					name: '',
					//address: '',
					email: '',
					confirmEmail: '',
					password: '',
					confirmPassword: '',
					termsAndConditions: false,
					privacyPolicy: false,
				},
				hiddenPassword : true,
				hiddenPasswordConfirm: true,

				errors: {},
				registros:null,
			}
		},

		methods: {
			register() {
				if(!this.validation(this.form)) {
					return false;
				}

				this.$store.dispatch('register', this.form);
			},

			validation(form) {
				const { 
					name, 
					address, 
					email, 
					confirmEmail, 
					password, 
					confirmPassword, 
					termsAndConditions, 
					privacyPolicy } = form;

				this.errors = {};

				if(name == '') {
					this.errors = {
						...this.errors,
						name: 'The field name is required.'
					};
					return false;
				}

			/*	if(address == '') {
					this.errors = {
						...this.errors,
						address: 'The field address is required.'
					};
					return false;
				}*/

				if(email == '') {
					this.errors = {
						...this.errors,
						email: 'The field E-mail is required.'
					};
					return false;
				}

				if(confirmEmail == '') {
					this.errors = {
						...this.errors,
						confirmEmail: 'The field confirm E-mail is required.'
					};
					return false;
				}

				if(password == '') {
					this.errors = {
						...this.errors,
						password: 'The field password is required.'
					};
					return false;
				}		
				
				if(confirmPassword == '') {
					this.errors = {
						...this.errors,
						confirmPassword: 'The field password is required.'
					};
					return false;
				}

				if(email !== confirmEmail) {
					this.msgAlert('E-mail fields do not match.', 'error');
					return false;
				}
				
				if(password !== confirmPassword) {
					this.msgAlert('Password fields do not match.', 'error');
					return false;
				}

				if(!termsAndConditions) {
					this.msgAlert('You have not accepted the terms and conditions.', 'error');
					return false;
				}

				if(!privacyPolicy) {
					this.msgAlert('You have not accepted the privacy policies', 'error');
					return false;
				}

				return true;
			},

			msgAlert(msg, type) {
				this.$swal({
					title: type,
          text: msg,
          icon: type
				});
			}
		}
	}
</script>

<style lang="css">
	.col-12 {
		padding: 5px 12px !important;
	}

	.first {
		padding-top: 12px !important;
	}
</style>