<template>
  <v-container fill-height>
    <v-layout align-center class="text-xs-center pt-5" column>
      <v-flex class="mb-4 mt-4">
        <img src="static/images/logo.png" alt="Logo" />
        <h1>
          <span class="primary--text">
            TM
          </span>
          <span class="title-name">
            SysAdmin
          </span>
        </h1>
      </v-flex>

      <v-flex>
        <v-card class="px-5 py-4">
          <form @submit="login()">
            <v-text-field
              label="Email"
              v-model="email"
              required
            ></v-text-field>

            <v-text-field
              label="Password"
              v-model="password"
              :append-icon="passVisible ? 'visibility' : 'visibility_off'"
              :append-icon-cb="() => (passVisible = !passVisible)"
              :type="passVisible ? 'text' : 'password'"
              required
            ></v-text-field>

            <v-btn
              class="primary px-4"
              type="submit"
              flat
            >
              Sign In
            </v-btn>
          </form>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      passVisible: false,
    };
  },
  methods: {
    login() {
      this.$store.dispatch('admin/auth', { email: this.email, password: this.password })
        .then(() => this.$router.push('/users'));
    },
  },
};
</script>

<style scoped>
  .title-name {
    font-weight: 400;
  }

  .layout.column>.flex {
    width: 500px;
  }
</style>

