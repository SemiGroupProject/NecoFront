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
        <div class="d-flex flex-row">
          <h3 class="mx-5">상품상태</h3>
          신품
        </div>
        <div class="d-flex flex-row">
          <h3 class="mx-5">배송비</h3>
          미포함
        </div>
        <div class="d-flex flex-row">
          <h3 class="mx-5">거래지역</h3>
          경남 창원시 마산합포구 고운로 128
        </div>

        <h3>상점정보</h3>
        <v-divider></v-divider>
        <div class="d-flex flex-row px-4" style="height: 80px">
          <v-avatar color="brown" style="align-self: center">
            <span class="white--text text-h5">SW</span>
          </v-avatar>
          <span class="text-h7 px-5" style="align-self: center"
            >물건팔아요</span
          >
        </div>
        <v-divider></v-divider>
        <v-btn>찜</v-btn><v-btn>구매하기</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="item in 4" :key="item" cols="3"><List /></v-col>
    </v-row>
    <v-row>
      <TailBox />
    </v-row>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
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
