<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        v-bind="attrs"
        large
        block
        color="#7429ff"
        tile
        class="btn white--text font-weight-bold"
        v-on="on"
        >주소검색</v-btn
      >
    </template>
    <v-card>
      <vue-daum-postcode
        v-on:complete="searchComplete($event)"
      ></vue-daum-postcode>
    </v-card>
  </v-dialog>
</template>

<script>
import { VueDaumPostcode } from 'vue-daum-postcode';
export default {
  components: {
    VueDaumPostcode
  },
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    searchComplete(event) {
      this.$emit('searchComplete', event);
      this.dialog = false;
    }
  }
};
</script>

<style></style>
