<template>
  <v-container class="container" style="max-width: 460px">
    <v-row style="margin-top: 100px"></v-row>
    <v-row>
      <v-col xs12>
        <h2 align="center">아이디 찾기</h2>
        <v-text-field v-model="id" label="이름"></v-text-field>
        <v-text-field v-model="password" label="이메일"></v-text-field>
        <p class="message">
          * 소셜로그인일 경우 해당 서비스에서 찾으시길 바랍니다.
        </p>
        <v-btn
          large
          block
          color="#7429ff"
          tile
          class="white--text font-weight-bold"
          @click="checkLogin()"
          >확인</v-btn
        >
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

<style>
.message {
  font-size: 12px;
  color: #7429ff;
}
</style>
