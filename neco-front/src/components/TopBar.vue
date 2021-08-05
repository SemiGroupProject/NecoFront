<template>
  <v-container fluid>
    <v-row class="top-item first" fluid>
      <v-col>로그인/회원가입</v-col>
      <v-col>내상점</v-col>
    </v-row>
    <v-row class="top-item second" fluid>
      <v-col>
        <v-row fluid>
          <v-col>니꼬내꼬</v-col>
          <v-col>검색창</v-col>
          <v-col>판매하기</v-col>
          <v-col>내상점</v-col>
          <v-col>상품관리</v-col>
        </v-row>
        <v-row>
          <v-col>전체메뉴 보기</v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.top-item {
  border-bottom: 1px solid #eee;
  padding: 0px;
}
.top-item.first {
  height: 50px;
}
.top-item.second {
  height: calc(212px - 38px);
}
</style>
