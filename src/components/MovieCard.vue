<template>
  <div>
    <v-card class="pa-6">
      <v-card-title> {{ movieObject.title }} </v-card-title>
      <v-img width="50%" :src="movieObject.poster" />
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    movieObject: Object,
  },
}
</script>

<style></style>
