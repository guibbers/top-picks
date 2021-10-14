<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title><strong>GuIMDB</strong></v-toolbar-title>
    <v-spacer></v-spacer>
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
  </v-app-bar>
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

<style></style>
