<template>
  <v-main style="margin: 0 12.5%">
    <v-container fluid>
      <h2 style="margin-bottom: 40px">공지사항</h2>
      <div class="ma-10">
        <v-row align="center" class="divider-top divider-bottom">
          <v-col cols="2"><div class="title">등록번호</div></v-col>
          <v-col cols="10"
            ><div>{{ this.$route.params.id }}</div></v-col
          >
        </v-row>
        <v-row align="center" class="divider-bottom">
          <v-col cols="2"><div class="title">제목</div></v-col>
          <v-col cols="10"><div>제목 ~~~~</div></v-col>
        </v-row>
        <v-row align="center" class="divider-bottom">
          <v-col cols="2"><div class="title">등록일</div></v-col>
          <v-col cols="4"><div>2021-08-28</div></v-col>
          <v-col cols="2"><div class="title">작성자</div></v-col>
          <v-col cols="4"><div>운영자</div></v-col>
        </v-row>
        <v-row align="center" class="divider-bottom">
          <v-col cols="2"><div class="title">내용</div></v-col>
          <v-col cols="10"
            ><div>
              가격이 터무니 없는 게시글은 곧바로 삭제 하겠습니다.
            </div></v-col
          >
        </v-row>
        <v-row>
          <v-col cols="12" align="end">
            <v-btn width="150" class="my-5" outlined text href="/notice"
              >목록으로</v-btn
            >
          </v-col>
        </v-row>
      </div>
    </v-container>
  </v-main>
</template>

<script>
export default {};
</script>

<style>
h2 {
  margin-top: 50px;
  color: #8f68d6;
}
.title {
  color: #7429ff;
  font-weight: bold;
}
.divider-top {
  border-top: 1px solid black;
}
.divider-bottom {
  border-bottom: 1px solid #ccc;
  min-height: 60px;
}
</style>
