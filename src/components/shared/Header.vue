<template>
  <v-toolbar color="primary">
    <v-toolbar-title class="white--text">
      TM-SysAdmin
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn
        class="white--text"
        flat
        :to="item.link"
        v-for="item in menuItems"
        :key="item.title"
      >
        <v-icon dark left>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>

      <v-btn
        class="white--text"
        flat
        @click="logout"
      >
        <v-icon dark left>exit_to_app</v-icon>
        Logout
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { icon: 'people', title: 'Users', link: '/users' },
        { icon: 'extension', title: 'Services', link: '/services' },
      ],
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('admin/logout');
      this.$router.push('/sign-in');
    },
  },
};
</script>
