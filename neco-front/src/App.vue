<template>
  <v-app>
    <top-bar v-if="noBar" />
    <v-main>
      <router-view />
    </v-main>
    <bottom-bar v-if="noBar" />
  </v-app>
</template>

<script>
import TopBar from "@/components/TopBar.vue";
import BottomBar from "@/components/BottomBar.vue";

export default {
  name: "App",
  components: {
    TopBar,
    BottomBar
  },
  computed: {
    noBar() {
      return !["/signIn", "/signUp", "/findPassword", "myInfo"].includes(
        this.$route.path
      );
    }
  }
};
</script>
