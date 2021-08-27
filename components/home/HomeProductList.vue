<template>
  <v-container>
    <v-card style="width: 200px; height: 250px" :href="`/item/${item.key}`">
      <v-img
        style="width: 200px; height: 170px"
        :src="require('@/assets/images/banner/banner1.png')"
      />

      <v-card-title> 상품 제목 </v-card-title>

      <v-card-subtitle> 1,400,000원 </v-card-subtitle>
    </v-card>
  </v-container>
</template>
<script>
export default {
  name: '',
  props: {
    item: { type: Object, default: null },
  },
};
</script>
<style scoped></style>
