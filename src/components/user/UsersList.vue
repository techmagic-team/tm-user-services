<template>
  <v-container class="users-list">
    <v-card>
      <v-card-title>
        <v-layout row justify-space-between>
          <v-flex sm3>
            <v-text-field
              append-icon="search"
              label="Search"
              single-line
              hide-details
              v-model="search"
            ></v-text-field>
          </v-flex>
          <v-flex sm3>
            <v-select
              :items="filterOptions"
              v-model="filterValue"
              box
              label="Filter by working status"
            ></v-select>
          </v-flex>
        </v-layout>
      </v-card-title>
      <v-data-table
          hide-headers
          :items="users"
          :rows-per-page-items="[10,20,50]"
          class="elevation-1"
        >
        <template slot="items" slot-scope="props">
          <tr>
            <td :class="{'red--text': props.item.lastWorkingDay }">
              {{ props.item.firstName }} {{ props.item.lastName }}
            </td>
            <td
              class="text-xs-center"
              v-for="(service, key) in services"
              :key="key"
            >
              <v-btn
                v-if="service.users && Object.values(service.users).includes(props.item.id)"
                :style="{backgroundColor: service.color}"
                @click="removeService(props.item.id, key, service)"
                class="service-chip"
              >
                <v-icon left>remove</v-icon>
                {{ service.name }}
              </v-btn>
              <v-btn
                color="primary"
                v-else
                @click="addService(props.item.id, key)"
              >
                <v-icon left>add</v-icon>
                {{ service.name }}
              </v-btn>
            </td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      filterValue: 'all',
      currentTimeStamp: new Date().getTime(),
      filterOptions: [
        { text: 'All', value: 'all' },
        { text: 'Only deleted', value: 'deleted' },
        { text: 'Only current', value: 'current' },
      ],
    };
  },
  created() {
    this.$store.dispatch('user/fetchList');
    this.$store.dispatch('service/fetchList');
  },
  computed: {
    users() {
      return this.$store.getters['user/getList']
        .filter(user => `${user.firstName} ${user.lastName}`.match(this.search) && this.isVisibleByFilter(user));
    },
    services() {
      return this.$store.getters['service/getList'];
    },
  },
  methods: {
    addService(userId, serviceId) {
      this.$store.dispatch('service/addUserToService', { userId, serviceId });
    },
    removeService(userId, serviceId) {
      this.$store.dispatch('service/removeUserFromService', { userId, serviceId });
    },
    isVisibleByFilter(user) {
      switch (this.filterValue) {
        case 'all':
          return true;
        case 'deleted':
          return user.lastWorkingDay && user.lastWorkingDay < this.currentTimeStamp;
        case 'current':
          return !user.lastWorkingDay || (user.lastWorkingDay && user.lastWorkingDay >= this.currentTimeStamp);
        default:
          return true;
      }
    },
  },
};
</script>

<style>
.users-list {
  margin: 0 auto 55px;
}

.service-chip {
  color: white !important;
}
</style>

