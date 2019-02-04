<template>
  <v-container class="services-list">
    <v-btn color="primary" @click="add">
      Add
      <v-icon right>add</v-icon>
    </v-btn>
    <v-layout row wrap>
      <v-flex
        xs12
        sm6
        md4
        class="pa-2"
        v-for="(service, key) in services"
        :key="service.name"
      >
        <v-card :style="{backgroundColor: service.color}" class="white--text">
          <v-card-title primary-title>
            <h3 class="headline mb-0">{{ service.name }}</h3>
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon @click="remove(key)">
              <v-icon color="white">close</v-icon>
            </v-btn>
            <v-btn icon @click="edit(service, key)">
              <v-icon color="white">edit</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('service/fetchList');
  },
  computed: {
    services() {
      return this.$store.getters['service/getList'];
    },
  },
  methods: {
    edit(service, id) {
      this.$store.dispatch('shared/setDrawer', {
        active: true,
        data: {
          id,
          service: { ...service },
        },
      });
    },
    add() {
      this.$store.dispatch('shared/setDrawer', { active: true, data: { name: '', color: '' } });
    },
    remove(id) {
      this.$store.dispatch('service/delete', id);
    },
  },
};
</script>

<style scoped>
  .services-list {
    margin: 0 auto 55px;
  }
</style>
