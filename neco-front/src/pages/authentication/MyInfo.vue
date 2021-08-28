<template>
  <v-container style="max-width: 460px">
    <v-row justify="center">
      <v-col style="margin-top: 100px" cols="12">
        <v-img class="mx-auto" src="@/img/logo.png" max-width="200" />
      </v-col>
      <v-col cols="8" class="pb-0">
        <v-text-field v-model="id" label="아이디"></v-text-field>
      </v-col>
      <v-col cols="4"
        ><v-btn
          large
          block
          color="#7429ff"
          tile
          class="btn white--text font-weight-bold"
          >비밀번호 변경</v-btn
        ></v-col
      >
      <v-col cols="12">
        <v-text-field v-model="name" label="이름"></v-text-field>
      </v-col>
      <v-col cols="12" class="pt-0 pb-0">
        <v-radio-group v-model="gender" row>
          <v-radio color="#7429ff" label="남" value="radio-1"></v-radio>
          <v-radio color="#7429ff" label="여" value="radio-2"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col class="pt-0">
        <p class="message">* 성별을 입력해주세요.</p>
      </v-col>
      <v-col cols="12">
        <v-text-field v-model="mobile" label="핸드폰번호"></v-text-field>
      </v-col>
      <v-col cols="8">
        <v-text-field v-model="postNunber" label="우편번호"></v-text-field>
      </v-col>
      <v-col cols="4"
        ><v-btn
          large
          block
          color="#7429ff"
          tile
          class="btn white--text font-weight-bold"
          >주소검색</v-btn
        ></v-col
      >
      <v-col cols="12">
        <v-text-field v-model="address" label="상세주소"></v-text-field>
      </v-col>
      <v-col cols="12" class="pb-0">
        <v-btn
          large
          block
          color="#7429ff"
          tile
          class="white--text font-weight-bold"
          >정보수정</v-btn
        >
      </v-col>
      <v-col cols="12">
        <v-btn
          large
          block
          color="#c02034"
          tile
          class="white--text font-weight-bold"
          >회원탈퇴</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      id: 'test id',
      name: '김이박',
      mobile: '010-1234-5678'
    };
  },
  methods: {}
};
</script>

<style>
.message {
  font-size: 12px;
  color: #7429ff;
}
</style>
