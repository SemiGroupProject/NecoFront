<template>
  <v-container class="top" fluid>
    <v-row>
      <v-col cols="6" align="center">
        <v-img class="ma-5" src="@/img/logo.png" max-width="150" />
      </v-col>
      <v-col cols="5" align="center">
        <v-btn width="150" class="ma-5" outlined> 로그인 </v-btn>
        <v-btn width="150" class="ma-5" outlined> 회원가입</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.top {
  border-bottom: 1px solid #eee;
}
</style>
