<template>
  <v-app>
    <tm-aside></tm-aside>

    <tm-header v-if="!noHeaders"></tm-header>
    <main>
      <router-view/>
    </main>
    <v-snackbar
      :timeout="timeout"
      :color="notification.color"
      :value="notification.message"
    >
      {{ notification.message }}
      <!-- <v-btn dark flat @click.native="false">Close</v-btn> -->
    </v-snackbar>
    <tm-footer v-if="!noHeaders"></tm-footer>
  </v-app>
</template>

<script>
import 'vue-swatches/dist/vue-swatches.min.css';

import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import NavigationDrawer from './components/shared/NavigationDrawer';

export default {
  name: 'App',
  components: {
    'tm-footer': Footer,
    'tm-header': Header,
    'tm-aside': NavigationDrawer,
  },
  data() {
    return {
      timeout: 3000,
      color: '',
    };
  },
  computed: {
    noHeaders() {
      return this.$route.meta.noHeaders;
    },
    notification() {
      return this.$store.getters['shared/getNotification'];
    },
  },
};
</script>

<style src='vuetify/dist/vuetify.min.css'>
    /* global styles */
</style>

<style scoped>
  .notification-alert {
    bottom: 45px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
  }
</style>
