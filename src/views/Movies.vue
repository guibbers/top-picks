<template>
  <div>
    <GenresBar />
  </div>
</template>

<script>
import GenresBar from '@/components/GenresBar'
export default {
  name: 'Home',
  components: {
    GenresBar,
  },
  data() {
    return {
      movieList: [],
    }
  },
}
</script>
