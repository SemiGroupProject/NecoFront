<template>
  <v-main style="margin: 0 12.5%">
    <v-container fluid>
      <h2>상품관리</h2>
      <v-data-table
        :headers="headers"
        :items="productList"
        :items-per-page="5"
        @click:row="clickProduct"
        style="cursor: pointer"
        class="ma-5"
      ></v-data-table>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: '상품 이미지', value: 'image' },
        { text: '상품 이름', value: 'name' },
        { text: '상품 가격', value: 'price' },
        { text: '등록시간', value: 'time' }
      ],
      productList: []
    };
  },
  methods: {
    clickProduct() {
      console.log('click product');
      // this.$router.push({
      //   name: 'notice-item',
      //   params: { id: data.id }
      // });
    }
  }
};
</script>

<style>
h2 {
  margin-top: 50px;
  color: #8f68d6;
}
</style>
