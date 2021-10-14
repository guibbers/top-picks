<template>
  <div>
    <v-card width="400" class="mx-auto mt-16">
      <v-card-title>
        <h1 class="display-1">Login</h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="User ID"
            prepend-icon="mdi-account-circle"
            v-model.number="userId"
          ></v-text-field>
          <v-text-field
            :type="showPassword ? 'text' : 'password'"
            label="User Password"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success">Register</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info" @click="userLogin">Login</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      showPassword: false,
      userId: null,
    }
  },
  methods: {
    async userLogin() {
      await this.$store.dispatch('setUserId', this.userId)

      const username = await this.$apollo.query({
        query: require('@/graphql/getUserInfo.gql'),
        variables: {
          id: this.userId,
        },
      })
      await this.$store.dispatch('getUsername', username.data.me[0].name)
      await this.$store.dispatch('userLogin')
      this.$router.push({ name: 'Movies' })
    },
  },
}
</script>

<style scoped></style>
