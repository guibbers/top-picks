<template>
  <div>
    <v-app-bar>
      <v-tabs>
        <v-tab v-for="genre in this.genres" :key="genre.name">
          {{ genre.name }}
        </v-tab>
      </v-tabs>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      genres: [],
    }
  },
  methods: {
    async getMovieGenres() {
      const genres = await this.$apollo.query({
        query: require('@/graphql/getMovieGenres.gql'),
      })
      this.genres = genres.data.Genre
    },
  },

  created() {
    this.getMovieGenres()
  },
}
</script>

<style></style>
