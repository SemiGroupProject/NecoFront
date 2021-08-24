<template>
  <v-container fill-height style="max-width: 460px">
    <v-row justify="center">
      <v-col cols="12">
        <v-img class="mx-auto" src="@/img/logo.png" max-width="300" />
        <v-text-field v-model="id" label="아이디"></v-text-field>
        <v-text-field v-model="password" label="비밀번호"></v-text-field>
        <v-btn
          large
          block
          color="#7429ff"
          tile
          class="white--text font-weight-bold"
          >로그인</v-btn
        >
        <v-btn text class="my-5">로그인 상태 유지</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      password: null
    };
  }
};
</script>

<style></style>
