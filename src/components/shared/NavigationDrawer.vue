<template>
  <v-navigation-drawer
    fixed
    right
    height="100%"
    temporary
    v-model="drawer.active"
  >
    <tm-service-form
      :service="drawer.data.service"
      :id="drawer.data.id"
    ></tm-service-form>
  </v-navigation-drawer>
</template>

<script>
import ServiceForm from '../service/ServiceForm';

export default {
  data() {
    return {
      showAside: true,
    };
  },
  computed: {
    drawer() {
      return this.$store.getters['shared/getDrawer'];
    },
  },
  components: {
    'tm-service-form': ServiceForm,
  },
};
</script>

<style scoped>

</style>

