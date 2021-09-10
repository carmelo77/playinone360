<template>
  <v-app>
    <app-bar></app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  components: {
    AppBar: () => import('@/components/Navigation/Appbar') 
  },
  name: 'AppMain',
  created() {
    this.$store.dispatch('autologin');
  }
};
</script>
