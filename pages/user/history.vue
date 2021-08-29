<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="items"
      :items-per-page="5"
      class="elevation-1"
    >
    </v-data-table>
  </v-container>
  <!-- <v-img style="width: 200px; height: 170px" :src="require('@/assets/images/banner/banner1.png')"></v-img> -->
</template>
<script>
export default {
  setup() {},
  data() {
    return {
      headers: [
        {
          text: '상품 이미지',
          value: 'image',
        },
        { text: '상품 이름', value: 'name' },
        { text: '상품 가격', value: 'price' },
        { text: '등록 시간', value: 'time' },
      ],
      items: [
        {
          image: `<v-img style="width: 200px; height: 170px" :src="require('@/assets/images/banner/banner1.png')"></v-img>`,
          name: 159,
          price: 6.0,
          time: 24,
        },
        {
          image: 'Frozen Yogurt',
          name: 159,
          price: 6.0,
          time: 24,
        },
        {
          image: 'Frozen Yogurt',
          name: 159,
          price: 6.0,
          time: 24,
        },
        {
          image: 'Frozen Yogurt',
          name: 159,
          price: 6.0,
          time: 24,
        },
        {
          image: 'Frozen Yogurt',
          name: 159,
          price: 6.0,
          time: 24,
        },
        {
          image: 'Frozen Yogurt',
          name: 159,
          price: 6.0,
          time: 24,
        },
      ],
    };
  },
};
</script>
<style scoped></style>
