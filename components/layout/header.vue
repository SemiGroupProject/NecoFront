<template>
  <v-container fluid>
    <v-row class="top-item first text-end" justify="center">
      <v-col cols="9">
        <v-btn class="font-weight-bold" small text href="/signIn"
          >로그인/회원가입</v-btn
        >
        <v-btn class="font-weight-bold" small text href="/myStore"
          >내상점</v-btn
        >
      </v-col>
    </v-row>
    <v-row class="top-item second mt-10" justify="center">
      <v-col cols="12">
        <v-row>
          <v-col cols="2">
            <v-img
              to="/index"
              :src="require('@/assets/images/logo/logo.png')"
              max-width="150"
              max-height="35"
            />
          </v-col>
          <v-col cols="7">
            <div class="search">
              <input
                v-model="searchWords"
                class="search-text"
                type="text"
                placeholder="상품명, 지역명 검색"
              />
            </div>
          </v-col>
          <v-col cols="3" class="text-end">
            <v-btn text to="/itemSell">
              <v-icon>mdi-store-plus</v-icon>
              판매하기
            </v-btn>
            <v-btn text to="/myStore">
              <v-icon>mdi-account-circle-outline</v-icon>
              내상점
            </v-btn>
            <v-btn text to="/itemManagement">
              <v-icon>mdi-archive</v-icon>
              상품관리
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="top-item third" justify="center">
      <v-col cols="12">
        <v-row>
          <v-menu>
            <template #activator="{ on, attrs }">
              <v-toolbar elevation="0">
                <v-app-bar-nav-icon
                  color="#7429ff"
                  v-bind="attrs"
                  v-on="on"
                ></v-app-bar-nav-icon>
                <v-toolbar-title>전체메뉴 보기</v-toolbar-title>
              </v-toolbar>
            </template>
            <v-list
              v-for="(item, index) in category"
              :key="index"
              :light="true"
            >
              <v-list-item :to="`/item/${item.name}/1`">
                <v-list-item-title>{{ item.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Header',
  components: {},
  filters: {},
  data: () => ({
    searchWords: '',
    category: [
      { name: '의류' },
      { name: '전자제품' },
      { name: '잡화' },
      { name: '생활용품' },
    ],
  }),
  computed: {},
  methods: {},
};
</script>

<style scoped>
v-list-item {
  color: black;
}
.top-item.first {
  height: 50px;
  border-bottom: 1px solid #eee;
}
.top-item.second {
  height: 110px;
}
.top-item.third {
  border-bottom: 1px solid #eee;
}
.search {
  position: relative;
}
.search-text {
  margin-left: 20px;
  width: 100%;
  height: 40px;
  border: 3px solid #7429ff;
  padding: 5px;
}
.search:focus {
  outline: none !important;
  border: 3px solid #7429ff;
}
.v-btn__content > .v-icon {
  color: black;
}
.v-toolbar__title {
  color: #7429ff;
  padding: 0px !important;
  font-size: 16px !important;
}
</style>
