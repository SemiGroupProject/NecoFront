<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <!-- <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
          Click Me
        </v-btn> -->
      <v-btn class="font-weight-bold" small text v-bind="attrs" v-on="on"
        >로그아웃</v-btn
      >
    </template>
    <v-card>
      <v-card-title class="text-h5 grey lighten-2"> Logout </v-card-title>
      <v-card-text class="my-5"> 로그아웃 하시겠습니까? </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="dialog = false"> Cancel </v-btn>
        <v-btn text @click="clickDone()"> Done </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    clickDone() {
      this.$store.commit('SET_ID', null);
      this.$VueCookies.remove('token');
      this.dialog = false;
      this.$router.push({ name: 'log-in' });
      console.log('done');
    }
  }
};
</script>
