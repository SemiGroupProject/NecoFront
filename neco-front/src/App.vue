<template>
  <router-view></router-view>
  <!-- <v-app>
    <top-bar v-if="isBar" />
    <v-main>
      <router-view v-if="isBar" style="margin: 0 12.5%" />
      <router-view v-if="!isBar" />
    </v-main>
    <bottom-bar v-if="isBar" />
  </v-app> -->
</template>

<script>
// import TopBar from '@/components/TopBar.vue';
// import BottomBar from '@/components/BottomBar.vue';

export default {
  name: 'App'
  // components: {
  //   TopBar,
  //   BottomBar
  // },
  // computed: {
  //   isBar() {
  //     return ![
  //       '/logIn',
  //       '/signUp',
  //       '/findPassword',
  //       '/myInfo',
  //       '/policy',
  //       '/findId'
  //     ].includes(this.$route.path);
  //   }
  // }
};
</script>
