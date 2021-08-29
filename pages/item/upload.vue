<template>
  <v-container fluid>
    <v-row align="center">
      <span class="header_name">카테고리</span>
      <v-col cols="4"
        ><v-select :items="items" label="Outlined style" outlined></v-select
      ></v-col>
      <v-col cols="4"
        ><v-select :items="items" label="Outlined style" outlined></v-select
      ></v-col>
    </v-row>
    <v-row align="center">
      <span class="header_name">제목</span>
      <v-text-field
        v-model="title"
        :rules="titleRules"
        label="상품명"
      ></v-text-field>
    </v-row>
    <v-sheet class="py-5"></v-sheet>
    <v-row align="center">
      <span class="header_name">내용</span>
      <v-textarea
        v-model="detail"
        :rules="detailRules"
        counter="500"
        label="상품 상세 설명"
        height="130"
        outlined
      ></v-textarea>
    </v-row>
    <v-row align="center">
      <span class="header_name">이미지 등록</span>
      <FileUpload>파일을 업로드 하세요.</FileUpload>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    title: '',
    detail: '',
    files: [],
    titleRules: [v => v.length >= 2 || '최소 2글자 이상 적어주세요'],
    detailRules: [v => v.length <= 500 || '500자 이하로 적어주세요.'],
  }),
  mounted() {
    console.log(this);
  },
};
</script>
<style scoped>
.header_name {
  color: rgb(49, 47, 47);
  margin: 10px 60px;
}
</style>
