<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title><strong>GuIMDB</strong></v-toolbar-title>
    <v-spacer></v-spacer>
    <div v-if="userIsLoggedIn">
      <v-btn :to="this.links[0].route" text rounded class="my-2" @click="logout"
        >Logout</v-btn
      >
      <v-btn :to="this.links[1].route" text rounded class="my-2">Home</v-btn>
    </div>
  </v-app-bar>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      links: [
        {
          name: 'logout',
          route: '/',
        },
        {
          name: 'home',
          route: '/movies',
        },
      ],
    }
  },
  computed: {
    ...mapState(['userIsLoggedIn']),
  },
  methods: {
    logout() {
      this.$store.dispatch('userLogin')
      this.$store.dispatch('setUserId', null)
      this.$store.dispatch('getUsername', '')
    },
  },
}
</script>

<style></style>
