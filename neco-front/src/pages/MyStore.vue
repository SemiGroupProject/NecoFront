<template>
  <v-main style="margin: 0 12.5%">
    <v-container>
      <v-row
        ><v-col cols="4" class="px-0">
          <div class="image-show" id="image-show"></div>
        </v-col>
        <v-col>
          <v-row class="justify-center align-center">
            <v-col cols="4"
              ><p class="store-name">{{ 'asdasd' }}</p></v-col
            >
            <v-col><v-btn outlined tile>상점명 변경</v-btn></v-col>
          </v-row>
          <v-row
            ><v-col cols="2"><p class="product-key">상점오픈일</p> </v-col
            ><v-col cols="2"><p class="product-value">24일 전</p> </v-col
            ><v-col cols="2"><p class="product-key">상품판매</p> </v-col
            ><v-col cols="2"><p class="product-value">0</p> </v-col></v-row
          >
          <v-row><v-col>소개글 위치 입니다</v-col></v-row>
        </v-col>
      </v-row>
      <v-row
        ><v-col cols="4"
          ><v-btn outlined tile style="margin-left: 132px"
            >이미지 변경</v-btn
          ></v-col
        ><v-col class="px-0" align="right"
          ><v-btn outlined tile>소개글 변경</v-btn></v-col
        ></v-row
      >
      <v-row
        ><v-col cols="2" class="px-0"
          ><v-btn height="46" block outlined tile>내 상품</v-btn> </v-col
        ><v-col cols="2" class="px-0"
          ><v-btn height="46" block outlined tile>구매한 상품</v-btn> </v-col
        ><v-col cols="2" class="px-0"
          ><v-btn height="46" block outlined tile>찜한 상품</v-btn> </v-col
        ><v-col cols="2" class="px-0"
          ><v-btn height="46" block outlined tile>거래 요청</v-btn> </v-col
        ><v-col cols="2" class="px-0"
          ><v-btn height="46" block outlined tile>상품 문의</v-btn> </v-col
        ><v-col cols="2" class="px-0"
          ><v-btn height="46" block outlined tile>상점 후기</v-btn>
        </v-col></v-row
      >
      <v-row
        ><v-col align="end"
          ><v-btn text>등록일 순</v-btn>|<v-btn text>조회수 순</v-btn>|<v-btn
            text
            >가격 순</v-btn
          ></v-col
        ></v-row
      ></v-container
    >
  </v-main>
</template>

<script>
export default {};
</script>

<style>
.image-show {
  border: 1px solid black;
  height: 260px;
  width: 260px;
}
.store-name {
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 0px !important;
}
.product-key {
  color: #999;
}
.product-value {
  font-weight: bold;
}
</style>
