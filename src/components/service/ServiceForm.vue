<template>
 <v-card flat>
   <v-toolbar>
     <v-btn icon @click="close">
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title>
        {{service.id ? 'Edit' : 'Create' }} Service
      </v-toolbar-title>
   </v-toolbar>

   <form class="pa-2 mt-3" @submit="submit()">
     <v-text-field
       label="Name"
       v-model="service.name"
       required
      ></v-text-field>

      <v-layout
        class="picker-row mb-3"
        align-center
        justify-space-between
      >
        <span class="subheading">
          Service Color
        </span>
        <swatches
          v-model="service.color"
          popover-to="left"
          colors="material-basic">
          <v-btn
            class="ma-0"
            icon
            slot="trigger"
          >
            <v-icon :style="{color: service.color}">
              format_color_fill
            </v-icon>
          </v-btn>
        </swatches>
      </v-layout>

      <div class="text-xs-center mb-3">
        <v-chip
          text-color="white"
          v-if="service.name"
          :style="{background: service.color}"
        >
          {{ service.name }}
        </v-chip>
      </div>

      <v-btn
        type="submit"
        class="primary px-4"
        block
        flat
      >
        Save
      </v-btn>
   </form>
 </v-card>
</template>

<script>
import Swatches from 'vue-swatches';

export default {
  components: { Swatches },
  props: {
    service: {
      type: Object,
      default() {
        return {};
      },
    },
    id: String,
  },
  methods: {
    close() {
      this.$store.dispatch('shared/setDrawer', { active: false, data: {} });
    },
    submit() {
      if (this.id) {
        this.update();
      } else {
        this.create();
      }
      this.close();
    },
    create() {
      this.$store.dispatch('service/create', {
        ...this.service,
      });
    },
    update() {
      this.$store.dispatch('service/update', { service: this.service, id: this.id });
    },
  },
};
</script>

<style scoped>
  .picker-row {
    border-bottom: 1px solid rgba(0,0,0,.42);
  }
</style>

