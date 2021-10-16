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
    <MovieList :movieList="movieList" />
  </div>
</template>

<script>
import MovieList from '@/components/MovieList.vue'

export default {
  data() {
    return {
      genres: [],
      movieList: [],
    }
  },
  components: {
    MovieList,
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
      console.log(movieList)
    },
  },

  created() {
    this.getMovieGenres()
    this.getMovieList()
  },
}
</script>

<style></style>
