<template>
  <v-container style="max-width: 460px">
    <v-card flat style="margin-top: 100px">
      <v-row justify="center"> <h2>비밀번호 찾기</h2> </v-row>
      <v-row>
        <v-col
          ><v-text-field v-model="id" label="아이디"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field v-model="mobile" label="핸드폰"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8" class="pb-0">
          <v-text-field v-model="email" label="이메일"></v-text-field>
        </v-col>
        <v-col cols="4"
          ><v-btn
            large
            block
            color="#7429ff"
            tile
            class="btn white--text font-weight-bold"
            >인증코드 발송</v-btn
          ></v-col
        >
        <v-col class="pt-0">
          <p class="message">*회원 가입때 기입한 이메일을 적어주세요</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn
            large
            block
            color="#7429ff"
            tile
            class="btn white--text font-weight-bold"
            >확인</v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      id: null,
      email: null,
      mobile: null
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
