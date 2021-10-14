<template>
  <v-app>
    <AppBar />
    <v-main>
      <Login />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Login from './components/Login'
import AppBar from '@/components/AppBar'
import Footer from '@/components/Footer'

export default {
  name: 'App',

  components: {
    Login,
    AppBar,
    Footer,
  },

  data: () => ({}),
}
</script>
