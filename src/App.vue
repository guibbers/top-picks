<template>
  <v-app>
    <AppBar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar'
import Footer from '@/components/Footer'

export default {
  name: 'App',

  components: {
    AppBar,
    Footer,
  },

  data() {
    return {
      userIsLoggedIn: this.$store.state.userIsLoggedIn,
    }
  },
}
</script>
