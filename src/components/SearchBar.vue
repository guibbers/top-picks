<template>
  <v-toolbar flat color="primary" dark height="80px">
    <v-row class="">
      <v-col lg="7" md="12" class="pa-0 ml-3">
        <v-text-field
          label="Search Movie"
          color="white"
          v-model="movieSearch"
          :append-outer-icon="'mdi-magnify'"
          :append-icon="movieSearch ? 'mdi-close' : ''"
          class="pt-3"
          @keyup.enter="search"
          @click:append-outer="search"
          @click:append="cleanSearch"
        />
      </v-col>
    </v-row>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      movieSearch: '',
      searchList: [],
    }
  },
  methods: {
    async search() {
      if (this.movieSearch) {
        const search = await this.$apollo.query({
          query: require('@/graphql/searchMovie.gql'),
          variables: {
            title: this.movieSearch,
          },
        })
        this.searchList = search.data.Movie
        this.$emit(this.searchList)
      } else {
        console.log('vai la')
      }
    },
    cleanSearch() {
      this.movieSearch = ''
    },
  },
}
</script>

<style></style>
