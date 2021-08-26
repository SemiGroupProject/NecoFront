<template>
  <v-app>
    <top-bar />
    <v-main>
      <router-view style="margin: 0 12.5%" />
    </v-main>
    <bottom-bar />
  </v-app>
</template>

<script>
import TopBar from '@/components/TopBar.vue';
import BottomBar from '@/components/BottomBar.vue';
export default {
  name: 'DefaultLayout',
  components: {
    TopBar,
    BottomBar
  }
};
</script>

<style></style>
