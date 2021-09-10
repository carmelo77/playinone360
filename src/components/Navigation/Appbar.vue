<template>
	<v-app-bar
		app
		color="dark"
		dark
	>
		<v-app-bar-title>
			Play in One
		</v-app-bar-title>

		<v-spacer></v-spacer>

		<v-btn text @click="$router.push({ name: 'Home' })">
			Home
		</v-btn>

		<v-btn text v-if="!isLogged" @click="$router.push({ name: 'Login' })">
			Login
		</v-btn>

		<!--<v-btn text @click="$router.push({ name: 'FiltradoResultados' })">
			Play in One
		</v-btn> -->

		<v-btn text v-if="isLogged" @click="logout">
			Logout
		</v-btn>

		<span v-if="$store.getters.user">{{ $store.getters.user.name }}</span>

		<!--<v-btn text @click="$router.push({ name: 'BuscarCampos' })">
			Campos de Golf
		</v-btn>

		<v-btn text @click="$router.push({ name: 'BuscarHoteles' })">
			Hoteles
		</v-btn> -->
	</v-app-bar>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	computed: {
		isLogged() {
			return this.$store.getters.isLogged; 
		}
 		
	},
	methods: {
		logout() {
			this.$store.dispatch('logout');
			this.$router.push({name: "Login"});
		}
	}
}
</script>