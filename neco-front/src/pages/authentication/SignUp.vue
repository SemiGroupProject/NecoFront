<template>
  <v-container style="max-width: 460px">
    <v-row justify="center">
      <v-col style="margin-top: 100px" cols="12">
        <v-img class="mx-auto" src="@/img/logo.png" max-width="300" />
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
          @click="checkDuplication()"
          >중복 확인</v-btn
        ></v-col
      >
      <v-col class="pt-0">
        <p class="message">* 3~10자 영문 대 소문자, 숫자를 사용하세요.</p>
      </v-col>
      <v-col cols="12" class="pb-0">
        <v-text-field v-model="password" label="비밀번호"></v-text-field>
      </v-col>
      <v-col class="pt-0">
        <p class="message">
          * 4~16자 영문 대소문자, 숫자, 특수문자를 사용하세요.
        </p>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="checkPassword"
          label="비밀번호 확인"
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-text-field v-model="name" label="이름"></v-text-field>
      </v-col>
      <v-col cols="12" class="pb-0">
        <v-text-field v-model="birth" label="생년월일"></v-text-field>
      </v-col>
      <v-col class="pt-0">
        <p class="message">* 생년월일은 6자리로 입력해주세요.</p>
      </v-col>
      <v-col cols="12">
        <v-radio-group v-model="gender" row>
          <v-radio color="#7429ff" label="남" value="radio-1"></v-radio>
          <v-radio color="#7429ff" label="여" value="radio-2"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col cols="12">
        <v-text-field v-model="mobile" label="핸드폰번호"></v-text-field>
      </v-col>
      <v-col cols="8">
        <v-text-field v-model="email" label="이메일"></v-text-field>
      </v-col>
      <v-col cols="4"
        ><v-btn
          large
          block
          color="#7429ff"
          tile
          class="btn white--text font-weight-bold"
          >인증하기</v-btn
        ></v-col
      >
      <v-col cols="8">
        <v-text-field v-model="postNunber" label="우편번호"></v-text-field>
      </v-col>
      <v-col cols="4">
        <search-address v-on:searchComplete="searchAddressComplete($event)" />
      </v-col>
      <v-col cols="12">
        <v-text-field v-model="address" label="상세주소"></v-text-field>
      </v-col>
      <v-card outlined max-height="200" class="overflow-y-auto"
        ><v-card-text style="white-space: pre-line"> {{ policy }} </v-card-text>
      </v-card>
      <v-col cols="12">
        <v-btn text class="pt-0" style="left: -20px" @click="checkAgree()">
          <v-icon v-if="!agreeStatus" left color="#7429ff"
            >mdi-checkbox-blank-circle-outline</v-icon
          >
          <v-icon v-else left color="#7429ff"
            >mdi-checkbox-marked-circle-outline</v-icon
          >
          동의합니다</v-btn
        >
      </v-col>
      <v-col cols="12" style="margin-bottom: 200px">
        <v-btn
          large
          block
          color="#7429ff"
          tile
          class="white--text font-weight-bold"
          @click="checkLogin()"
          >회원가입</v-btn
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { FETCH_CHECK_ID_DUPLICATION } from '@/api/index';
import SearchAddress from '@/components/SearchAddress';
import { signUpPolicy } from '../../static/policy.js';
export default {
  components: {
    SearchAddress
  },
  data() {
    return {
      id: null,
      password: null,
      postNunber: null,
      address: null,
      checkPassword: null,
      name: null,
      birth: null,
      gender: null,
      mobile: null,
      email: null,
      policy: signUpPolicy,
      agreeStatus: false
    };
  },
  methods: {
    checkAgree() {
      this.agreeStatus = !this.agreeStatus;
    },
    checkDuplication() {
      FETCH_CHECK_ID_DUPLICATION(this.id);
      console.log('아이디중복확인클릭');
    },
    searchAddressComplete(event) {
      this.postNunber = event.zonecode;
      this.address = event.address;
      console.log(event);
    }
  }
};
</script>

<style>
.message {
  font-size: 12px;
  color: #7429ff;
}
</style>
