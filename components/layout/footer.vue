<template>
  <v-container fluid>
    <v-row class="bottom-item first">
      <v-col></v-col>
      <v-col cols="9" class="d-flex justify-space-between">
        <v-btn class="font-weight-bold" text href="/notice">공지사항</v-btn>
        <v-btn class="font-weight-bold" text href="/adinquiry">광고안내</v-btn>
        <v-btn class="font-weight-bold" text href="/policy">운영정책</v-btn>
        <v-btn class="font-weight-bold" text href="/question">문의하기</v-btn>
      </v-col>
      <v-col></v-col>
    </v-row>
    <v-row class="bottom-item second">
      <v-col></v-col>
      <v-col cols="9" class="d-flex justify-space-between">
        <v-img src="@/img/f_logo.png" max-width="150" max-height="35" />
        <div>
          <p class="address">내꼬니꼬 서비스 neconicoservice@gmail.com</p>
          <p class="copyright">Copyright ⓒ NAECONICO. All rights reserved.</p>
        </div>
      </v-col>
      <v-col></v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
.bottom-item {
  border-top: 1px solid #eee;
  padding: 0px;
}
.bottom-item.first {
  height: 50;
}
.bottom-item.second {
  padding: 50px 0;
  height: calc(212px - 38px);
}
.address {
  margin-bottom: 5px !important;
}
.copyright {
  font-size: 12px;
}
</style>
