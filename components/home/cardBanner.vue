<template>
  <v-carousel :src="require('@/assets/images/banner/banner1.png')">
    <v-carousel-item v-for="item in imgList" :key="item">
      <v-img :src="require(`@/assets/images/banner/${item}`)"> </v-img>
    </v-carousel-item>
  </v-carousel>
</template>
<script>
export default {
  name: 'CardBanner',
  data() {
    return {
      imgList: ['banner1.png', 'banner2.png'],
    };
  },
};
</script>
<style scoped></style>
