<template>
  <v-container fluid>
    <v-carousel :src="require('@/img/banner/banner1.png')">
      <v-carousel-item v-for="item in imgList" :key="item">
        <v-img :src="require(`@/img/banner/${item}`)" height="450"> </v-img>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      imgList: ['banner1.png', 'banner2.png']
    };
  }
};
</script>

<style></style>
