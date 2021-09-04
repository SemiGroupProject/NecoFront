<template>
  <v-card flat>
    <h4>상품문의</h4>
    <v-card flat min-height="46" align="end">
      <v-textarea
        placeholder="내용을 입력하세요"
        counter
        auto-grow
        outlined
        rows="1"
        row-height="100"
      ></v-textarea>
      <v-btn width="120" outlined tile color="#999">
        <v-icon style="margin-right: 5px">mdi-pencil</v-icon>등록
      </v-btn>
    </v-card>
  </v-card>
</template>

<script>
export default {};
</script>

<style scoped>
h4 {
  margin-top: 30px;
  margin-bottom: 10px;
}
</style>
