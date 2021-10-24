<template>
  <v-app>
    <top-bar class="top" />
    <v-main class="main">
      <router-view />
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

<style scoped>
.top {
  z-index: 5;
}
.main {
  position: relative;
  z-index: 1;
}
</style>
