<template>
  <div class="d-flex flex-wrap">
    <MovieCard
      class="pa-6 mx-5"
      v-for="movie in movieList"
      :key="movie.id"
      :movieObject="movie"
    />
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard'

export default {
  components: {
    MovieCard,
  },
  props: {
    movieList: Array,
  },
}
</script>

<style></style>
