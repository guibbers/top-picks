<template>
  <div>
    <v-card class="d-flex" width="400px">
      <div class="image">
        <img :src="movieObject.poster" />
      </div>
      <v-card-text class="ml-auto mr-auto">
        <v-card-title>
          {{ movieObject.title }}
        </v-card-title>
        <v-card-subtitle>
          {{ movieObject.year }}
        </v-card-subtitle>
        <v-rating
          empty-icon="mdi-star-outline"
          full-icon="mdi-star"
          half-icon="mdi-star-half-full"
          hover
          length="5"
          size="12  "
          :value="this.rating"
        ></v-rating>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    movieObject: Object,
  },
  data() {
    return {
      rating: this.movieObject.imdbRating / 2,
    }
  },
}
</script>

<style>
.image {
  height: 200px;
}

.image img {
  height: 100%;
}

v-card-title {
  width: 100px;
}
</style>
