<template>
  <v-main style="margin: 0 12.5%">
    <v-container fluid>
      <h2>상품등록</h2>
      <v-row style="height: 60px">
        <v-col cols="1"><p class="text-subtitle-2 mt-1">카테고리</p></v-col>
        <v-col cols="2"
          ><v-select
            :items="category1"
            v-model="selectCategory1"
            label="대분류"
            dense
            outlined
          ></v-select
        ></v-col>
        <v-col cols="2"
          ><v-select
            :items="category2"
            v-model="selectCategory2"
            label="소분류"
            dense
            outlined
          ></v-select
        ></v-col>
        <p>{{ category2[category1] }}</p>
      </v-row>
      <v-row>
        <v-col cols="1"></v-col>
        <v-col>
          <p class="category-message">
            카테고리: {{ selectCategory1 }} {{ selectCategory1 ? '▶ ' : '' }}
            {{ selectCategory2 }}
          </p></v-col
        >
      </v-row>
      <v-row>
        <v-col cols="1" style="height: 60px"
          ><p class="text-subtitle-2 mt-1">제목</p></v-col
        >
        <v-col cols="11" style="height: 60px"
          ><v-text-field outlined dense></v-text-field
        ></v-col>
        <v-col cols="1" class="pt-0"></v-col>
        <v-col class="pt-0">
          <p class="message">* 상품명을 2자 이상 입력해주세요.</p></v-col
        >
      </v-row>
      <v-row>
        <v-col cols="1"><p class="text-subtitle-2 mt-1">내용</p></v-col>
        <v-col cols="11"
          ><v-textarea
            placeholder="내용을 입력하세요"
            counter
            auto-grow
            outlined
            rows="1"
            row-height="100"
          ></v-textarea
        ></v-col>
      </v-row>
      <v-row>
        <v-col cols="1"><p class="text-subtitle-2 mt-1">이미지 등록</p></v-col>
        <v-col cols="2"
          ><input
            type="file"
            id="imageUpload1"
            class="new-image-btn"
            accept="image/*"
            @change="loadFile"
          /><label for="imageUpload1" class="new-image-box-label">
            <v-img
              class="mx-auto new-image"
              src="@/img/camera_icon.png"
              alt=""
            />
            <span>이미지 등록</span>
          </label>
        </v-col>
        <v-col cols="9"><div class="image-show" id="image-show"></div></v-col>
        <v-col cols="1" class="pt-0"></v-col>
        <v-col class="pt-0 mb-5">
          <p class="message">* 1개 이상의 이미지를 등록해주세요.</p>
          <p class="message">
            jpg, gif, jpeg, png파일만 등록 가능합니다.
          </p></v-col
        >
      </v-row>
      <v-row class="divider">
        <v-col cols="1" style="height: 60px"
          ><p class="text-subtitle-2 mt-1">가격</p></v-col
        >
        <v-col cols="5" style="height: 60px"
          ><v-text-field outlined dense></v-text-field
        ></v-col>
      </v-row>
      <v-row class="divider">
        <v-col cols="1" style="height: 60px"
          ><p class="text-subtitle-2 mt-2">거래 지역</p></v-col
        >
        <v-col cols="11" style="height: 60px"
          ><v-btn width="120" outlined href="/log-in"> 내주소 </v-btn
          ><v-btn width="120" class="mx-2" outlined href="/log-in">
            주소 검색
          </v-btn></v-col
        >
        <v-col cols="1" style="height: 60px"></v-col>
        <v-col cols="5" style="height: 60px"
          ><v-text-field outlined dense></v-text-field
        ></v-col>
      </v-row>
      <!-- <v-row class="divider">
        <v-col cols="1" style="height: 60px"
          ><p class="text-subtitle-2 mt-1">상품 상태</p></v-col
        >
        <v-col cols="5" style="height: 60px"
          ><v-radio-group v-model="status" class="mt-0" row>
            <v-radio color="#7429ff" label="신품" value="radio-1"></v-radio>
            <v-radio
              color="#7429ff"
              label="중고"
              value="radio-2"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row> -->
      <v-row class="divider">
        <v-col cols="1" style="height: 60px"
          ><p class="text-subtitle-2 mt-1">배송 가격</p></v-col
        >
        <v-col cols="5" style="height: 60px"
          ><v-radio-group v-model="status" class="mt-0" row>
            <v-radio color="#7429ff" label="포함" value="radio-1"></v-radio>
            <v-radio
              color="#7429ff"
              label="미포함"
              value="radio-2"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>
      <v-row class="mb-10">
        <v-col align="center"
          ><v-btn
            large
            color="#7429ff"
            tile
            width="200"
            class="white--text font-weight-bold"
            @click="clickRegister()"
            >등록하기</v-btn
          ></v-col
        >
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      selectCategory1: null,
      selectCategory2: null,
      category1: [],
      category2: [],
      // category2: {
      //   의류: ['남성의류', '여성의류', '신발'],
      //   전자제품: ['컴퓨터', '모바일제품', '카메라', '가전제품'],
      //   잡화: ['도서', '티켓', '음반', '악세사리'],
      //   생활용품: ['주방용품', '식품', '가구']
      // },
      status: null
    };
  },
  methods: {
    loadFile(event) {
      console.log(event.target.files);
      let file = event.target.files[0]; //선택된 파일 가져오기

      //새로운 이미지 div 추가
      let newImage = document.createElement('img');
      newImage.setAttribute('class', 'img');

      console.log(newImage);
      //이미지 source 가져오기
      newImage.src = URL.createObjectURL(file);

      // newImage.style.width = '70%';
      newImage.style.height = '180px';
      newImage.style.objectFit = 'contain';

      //이미지를 image-show div에 추가
      let container = document.getElementById('image-show');
      container.appendChild(newImage);
      console.log('adad');
    },
    clickRegister() {
      this.$store.dispatch('registItem', {}).then((response) => {
        console.log(response);
      });
      console.log('register');
    }
  },
  mounted() {
    this.$store.dispatch('categoryList').then((response) => {
      const category1 = response
        .filter((x) => x.level == 1)
        .map((x) => x.categoryName);
      this.category1 = category1;
      const category2 = response
        .filter((x) => x.level == 2)
        .map((x) => x.categoryName);
      this.category2 = category2;
    });
  }
};
</script>

<style>
h2 {
  margin-top: 50px;
  margin-bottom: 50px;
  color: #8f68d6;
}
.title {
  font-weight: bold;
}
.category-message {
  font-size: 16px;
  color: #7429ff;
}
.message {
  font-size: 14px;
  color: #7429ff;
  margin-bottom: 0px !important;
}
.new-image-box-label {
  display: block;
  width: 150px;
  height: 180px;
  background: #ddd;
  box-sizing: border-box;
  border: 1px solid #ccc;
  cursor: pointer;
  text-align: center;
}
.new-image-btn {
  display: none;
}
.new-image {
  width: 70px;
  margin-top: 35px;
  text-align: center;
}
.new-image-box-label span {
  display: block;
  color: #fff;
  font-weight: 500;
}
.divider {
  border-top: 1px solid #ccc;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
