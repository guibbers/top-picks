<template>
  <div>
    <v-app-bar>
      <v-tabs>
        <v-tab
          v-for="genre in this.genres"
          :key="genre.name"
          @click="getMovieList(genre.name)"
        >
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
      movieList: [],
    }
  },
  methods: {
    async getMovieGenres() {
      const genres = await this.$apollo.query({
        query: require('@/graphql/getMovieGenres.gql'),
      })
      this.genres = genres.data.Genre
    },
    async getMovieList(genre) {
      const movieList = await this.$apollo.query({
        query: require('@/graphql/getMovieList.gql'),
        variables: {
          genre: genre,
        },
      })
      this.movieList = movieList.data.Genre[0].movies
      console.log(this.movieList)
    },
  },

  created() {
    this.getMovieGenres()
  },
}
</script>

<style></style>
