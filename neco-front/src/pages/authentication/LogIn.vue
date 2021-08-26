<template>
  <v-container fill-height style="max-width: 460px">
    <v-row justify="center">
      <v-col cols="12">
        <v-img class="mx-auto" src="@/img/logo.png" max-width="300" />
      </v-col>
      <v-col v-show="loginError" cols="12" class="red--text">
        {{ '아이디 혹은 암호가 올바르지 않습니다.' }}
      </v-col>
      <v-col cols="12">
        <v-text-field v-model="id" label="아이디"></v-text-field>
        <v-text-field v-model="password" label="비밀번호"></v-text-field>
        <v-btn
          large
          block
          color="#7429ff"
          tile
          class="white--text font-weight-bold"
          @click="checkLogin()"
          >로그인</v-btn
        >
        <v-btn text class="my-5" @click="changeLoginStatus()">
          <v-icon v-if="!loginStatus" left color="#7429ff"
            >mdi-checkbox-blank-circle-outline</v-icon
          >
          <v-icon v-else left color="#7429ff"
            >mdi-checkbox-marked-circle-outline</v-icon
          >
          로그인 상태 유지</v-btn
        >
      </v-col>
      <v-col cols="12" align="center">
        <v-btn text href="/find-id">아이디 찾기</v-btn> |
        <v-btn text href="/log-in">비밀번호 찾기</v-btn> |
        <v-btn text href="/sign-up">회원 가입</v-btn>
      </v-col>
      <v-col>
        <v-btn outlined large block>Sign in with Google</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      password: null,
      loginStatus: false,
      loginError: null
    };
  },
  methods: {
    changeLoginStatus() {
      this.loginStatus = !this.loginStatus;
    },
    checkLogin() {
      console.log('aaa');
      this.loginError = true;
    }
  }
};
</script>

<style></style>
