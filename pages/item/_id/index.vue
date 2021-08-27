<template>
  <v-container>
    <v-row>
      <v-col cols="5">
        <v-img
          style="width: 500px; height: 500px"
          :src="require('@/assets/images/banner/banner1.png')"
        />
      </v-col>
      <v-col cols="7">
        <h1>
          스타벅스 텀블러<br />
          30,000원
        </h1>
        <v-divider></v-divider>
        <v-icon small>visibility</v-icon>
        <v-icon small>watch_later</v-icon>
        <v-icon small>favorite</v-icon>
        <v-divider></v-divider>
        <v-avatar color="primary" size="66">43</v-avatar>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="item in 4" :key="item" cols="3"><List /></v-col>
    </v-row>
    <v-row>
      <TailBox />
    </v-row>
  </v-container>
</template>
<script>
import List from '~/components/products/DetailProductList.vue';
import TailBox from '~/components/products/TailBox.vue';
export default {
  name: 'ProductDetail',
  components: {
    List,
    TailBox,
  },
  setup() {},
};
</script>
<style scoped></style>
