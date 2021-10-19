<template>
  <div>
    <SearchBar />
    <GenresBar />
  </div>
</template>

<script>
import GenresBar from '@/components/GenresBar'
import SearchBar from '@/components/SearchBar'
export default {
  name: 'Home',
  components: {
    GenresBar,
    SearchBar,
  },
  data() {
    return {
      movieList: [],
    }
  },
}
</script>
