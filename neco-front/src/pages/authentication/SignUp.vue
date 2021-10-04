<template>
  <v-container style="max-width: 460px">
    <v-row justify="center">
      <v-col style="margin-top: 100px" cols="12">
        <v-img class="mx-auto" src="@/img/logo.png" max-width="300" />
      </v-col>
      <v-col cols="12" class="pb-0">
        <v-text-field v-model="accountId" label="아이디"></v-text-field>
      </v-col>
      <!-- <v-col cols="4"
        ><v-btn
          large
          block
          color="#7429ff"
          tile
          class="btn white--text font-weight-bold"
          @click="checkDuplication()"
          >중복 확인</v-btn
        ></v-col
      > -->
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
      <v-col cols="12">
        <v-text-field v-model="phoneNumber" label="핸드폰번호"></v-text-field>
      </v-col>
      <v-col cols="8">
        <v-text-field
          v-model="addressInfo.zipNo"
          label="우편번호"
        ></v-text-field>
      </v-col>
      <v-col cols="4">
        <search-address v-on:searchComplete="searchAddressComplete($event)" />
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="addressInfo.street"
          label="상세주소"
        ></v-text-field>
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
          v-if="!signUpCondition"
          large
          block
          color="grey darken-1"
          tile
          class="white--text font-weight-bold"
          >회원가입</v-btn
        >
        <v-btn
          v-if="signUpCondition"
          large
          block
          color="#7429ff"
          tile
          class="white--text font-weight-bold"
          @click="signUp()"
          >회원가입
        </v-btn>
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
      accountId: null,
      password: null,
      addressInfo: {
        zipNo: null,
        street: null
      },
      checkPassword: null,
      name: null,
      phoneNumber: null,
      policy: signUpPolicy,
      agreeStatus: false
    };
  },
  computed: {
    passwordCheck() {
      return this.password
        ? this.password === this.checkPassword
          ? true
          : false
        : false;
    },
    signUpCondition() {
      let result =
        !!this.accountId &&
        !!this.passwordCheck &&
        !!this.name &&
        !!this.phoneNumber &&
        !!this.addressInfo.zipNo &&
        !!this.addressInfo.street &&
        !!this.agreeStatus;
      return result;
    }
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
      this.addressInfo.zipNo = event.zonecode;
      this.addressInfo.street = event.address;
      console.log(event);
    },
    signUp() {
      const data = {
        accountId: this.accountId,
        password: this.password,
        name: this.name,
        phoneNumber: this.phoneNumber,
        addressInfo: {
          zipNo: this.zipNo,
          street: this.street
        }
      };
      console.log('회원가입클릭', data);
      this.$store
        .dispatch('signUp', data)
        .then(() => {
          console.log('회원가입성공');
        })
        .catch(() => {
          console.log('회원가입실패');
        });
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
