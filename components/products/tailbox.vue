<template>
  <v-container>
    <v-textarea
      outlined
      readonly
      name="input-7-4"
      label="상품정보"
      value="강아지 치아가 안 좋을때 좋은 간식입니다. 우리집 강아지에게 조금 큰 것 같아서 판매합니다."
    ></v-textarea>
    <v-text-field
      v-model="title"
      :rules="rules"
      counter="100"
      hint="상품에 관한 궁굼한점 물어보세요.🐶"
      label="상품문의"
    ></v-text-field>
  </v-container>
</template>
<script>
export default {
  name: 'TailBox',
  setup() {},
  data() {
    return {
      title: '',
      rules: [v => v.length <= 100 || '최대 100자 까지 입력 가능합니다.'],
    };
  },
};
</script>
<style scoped></style>
