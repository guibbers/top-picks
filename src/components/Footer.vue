<template>
  <v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link.name"
        :to="link.route"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link.name }}
      </v-btn>
      <v-col class="primary py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>GuIMDB</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      links: this.$store.state.links,
    }
  },
}
</script>
