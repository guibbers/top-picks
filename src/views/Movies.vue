<template>
  <div>
    <GenresBar />
    <MovieList />
  </div>
</template>

<script>
import GenresBar from '@/components/GenresBar'
import MovieList from '@/components/MovieList'
export default {
  name: 'Home',
  components: {
    GenresBar,
    MovieList,
  },
}
</script>
