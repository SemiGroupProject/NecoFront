<template>
  <v-app>
    <authentication-top-bar></authentication-top-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>
Authentication
<script>
import AuthenticationTopBar from '@/components/AuthenticationTopBar.vue';
export default {
  name: 'FindLayout',
  components: {
    AuthenticationTopBar
  }
};
</script>

<style></style>
