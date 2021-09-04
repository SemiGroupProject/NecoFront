<template>
  <v-row style="padding-top: 50px">
    <v-col cols="6">
      <v-img src="@/img/test_image.jpg" max-width="440" max-height="455" />
    </v-col>
    <v-col cols="6">
      <v-row>
        <p class="item-title">{{ item.name }}</p>
        <p class="item-price">{{ item.price }}</p>
      </v-row>
      <v-row class="item-status-group">
        <v-col>
          <div class="item-status">
            <v-icon>mdi-heart</v-icon> <span> {{ item.like }}</span>
          </div>
          <div class="item-status">
            <v-icon>mdi-eye</v-icon> <span> {{ item.view }}</span>
          </div>
          <div class="item-status">
            <v-icon>mdi-clock</v-icon> <span>{{ item.date }}</span>
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-10">
        <v-col cols="7">
          <v-row>
            <v-col cols="3"> <p class="item-key">상품 상태</p></v-col>
            <v-col> {{ item.status }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="3"> <p class="item-key">배송비</p></v-col>
            <v-col style="color: #6c58f0"> {{ item.shippingFee }}</v-col>
          </v-row>
          <v-row>
            <v-col cols="3"> <p class="item-key">거래 지역</p></v-col>
            <v-col style="color: #46a3db">{{ item.address }}</v-col>
          </v-row>
        </v-col>
        <v-col cols="4">
          <p class="seller">상점 정보</p>
        </v-col>
      </v-row>
      <v-row class="my-10">
        <v-btn width="150" class="mx-2" outlined tile color="#999">
          <v-icon style="margin-right: 5px">mdi-heart</v-icon>찜
        </v-btn>
        <v-btn
          width="150"
          class="mx-2 white--text"
          color="#7429ff"
          tile
          depressed
        >
          구매하기
        </v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      item: {
        name: 'LG 코드제로 청소기 팔아요 실사용 7일!!!!!',
        price: '1,400,000원',
        like: 0,
        view: 44,
        date: '69일전',
        status: '중고',
        shippingFee: '포함',
        address: '서울 강북구 덕흥로 102-3'
      },
      seller: {
        img: '',
        name: '태크민'
      }
    };
  }
};
</script>

<style>
.item-title,
.item-price {
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
}
.item-status-group {
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.item-status {
  display: inline-block;
  margin-right: 20px;
}
.item-status > span {
  color: #bbbbbb;
  font-size: 14px;
  margin-left: 5px;
}
.item-key {
  color: #999;
}
.seller {
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
  font-weight: bold;
}
</style>
