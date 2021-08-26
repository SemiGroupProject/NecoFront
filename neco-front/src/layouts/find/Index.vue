<template>
  <v-app>
    <user-top-bar></user-top-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import UserTopBar from '@/components/UserTopBar.vue';
export default {
  name: 'FindLayout',
  components: {
    UserTopBar
  }
};
</script>

<style></style>
