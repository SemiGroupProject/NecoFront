<template>
  <v-container fluid>
    <v-row class="bottom-item first" fluid>
      <v-col>공지사항</v-col>
      <v-col>광고안내</v-col>
      <v-col>운영정책</v-col>
      <v-col>문의하기</v-col>
    </v-row>
    <v-row class="bottom-item second" fluid>
      <v-col>
        <v-row fluid>
          <v-col>니꼬내꼬</v-col>
          <v-col>copyright</v-col>
        </v-row>
      </v-col>
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
  height: calc(212px - 38px);
}
</style>
