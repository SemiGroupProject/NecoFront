<template>
  <v-container fluid>
    <v-row class="top-item first text-end" justify="center">
      <v-col cols="9">
        <v-btn
          class="font-weight-bold"
          v-if="!checkLogin"
          small
          text
          href="/log-in"
          >로그인/회원가입</v-btn
        >
        <v-btn
          class="font-weight-bold"
          v-if="checkLogin"
          small
          text
          href="/my-store"
          >내상점</v-btn
        >
        <template v-if="checkLogin">
          <logout></logout>
        </template>
      </v-col>
    </v-row>
    <v-row class="top-item second mt-10" justify="center">
      <v-col cols="9">
        <v-row>
          <v-col cols="2">
            <a href="/"
              ><v-img src="@/img/logo.png" max-width="150" max-height="35"
            /></a>
          </v-col>
          <v-col cols="6">
            <div class="search">
              <input
                class="search-text"
                type="text"
                placeholder="상품명, 지역명 검색"
              />
            </div>
          </v-col>
          <v-col class="text-end">
            <v-btn text href="/item-sell">
              <v-icon>mdi-store-plus</v-icon>
              판매하기
            </v-btn>
            <v-btn text href="/my-store">
              <v-icon>mdi-account-circle-outline</v-icon>
              내상점
            </v-btn>
            <v-btn text href="/item-management">
              <v-icon>mdi-archive</v-icon>
              상품관리
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="top-item third" justify="center">
      <v-col cols="9">
        <v-row>
          <v-toolbar class="elevation-0">
            <v-app-bar-nav-icon
              color="#7429ff"
              @click="clickLook"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>전체메뉴 보기</v-toolbar-title>
            <div class="category1" v-if="isCategory">
              <div v-for="category in category1" :key="category.categoryName">
                <button
                  class="category1-btn"
                  @click="selectCategory1 = category.categoryName"
                >
                  {{ category.categoryName }}
                </button>
              </div>
            </div>
            <div class="category2" v-if="selectCategory1 && isCategory">
              <div v-for="name in category2NameList" :key="name">
                <button class="category2-btn" @click="clickCategory2(name)">
                  {{ name }}
                </button>
              </div>
            </div>
          </v-toolbar>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Logout from '@/components/Logout.vue';
export default {
  data() {
    return {
      isCategory: false,
      category1: [],
      category2: [],
      selectCategory1: null,
      selectCategory2: null
    };
  },
  components: {
    Logout
  },
  computed: {
    checkLogin() {
      return this.$store.state.id ? true : false;
    },
    category2NameList() {
      const parentId = this.selectCategory1
        ? this.category1.find((x) => x.categoryName == this.selectCategory1).id
        : null;
      return parentId
        ? this.category2
            .filter((x) => x.parent == parentId)
            .map((x) => x.categoryName)
        : [];
    }
  },
  methods: {
    clickLook() {
      this.isCategory = !this.isCategory;
      this.selectCategory1 = null;
      this.selectCategory2 = null;
    },
    clickCategory2(target) {
      this.isCategory = !this.isCategory;
      this.selectCategory2 = target;
    }
  },
  mounted() {
    console.log(this.$store.state.id);
    this.$store.dispatch('categoryList').then((response) => {
      const category1 = response.filter((x) => x.level == 1);
      this.category1 = category1;
      const category2 = response.filter((x) => x.level == 2);
      this.category2 = category2;
    });
  }
};
</script>

<style>
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
  color: red;
}
.v-toolbar__title {
  color: #7429ff;
  padding: 0px !important;
  font-size: 16px !important;
}
.category1 {
  position: fixed;
  width: 100px;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  background-color: white;
  left: 12px;
  top: 65px;
}
.category2 {
  position: fixed;
  width: 130px;
  border-left: 1px solid #eee;
  border-right: 1px solid #eee;
  background-color: white;
  left: 112px;
  top: 65px;
}
.category1 > div,
.category2 > div {
  border-bottom: 1px solid #eee;
}
.category1-btn,
.category2-btn {
  margin: 8px;
  margin-left: 15px;
}
</style>
