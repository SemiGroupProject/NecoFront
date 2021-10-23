<template>
  <v-main style="margin: 0 12.5%">
    <v-container fluid>
      <v-snackbar
        v-model="snackbar.status"
        :timeout="snackbar.timeout"
        :color="snackbar.color"
      >
        {{ snackbar.text }}
        <template v-slot:action="{ attrs }">
          <v-btn
            color="white"
            text
            v-bind="attrs"
            @click="snackbar.status = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
      <h2>상품등록</h2>
      <v-row style="height: 60px">
        <v-col cols="1"><p class="text-subtitle-2 mt-1">카테고리</p></v-col>
        <v-col cols="2"
          ><v-select
            :items="category1NameList"
            v-model="selectCategory1"
            label="대분류"
            dense
            outlined
          ></v-select
        ></v-col>
        <v-col cols="2"
          ><v-select
            :items="category2NameList"
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
          ><v-text-field outlined dense v-model="title"></v-text-field
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
            v-model="content"
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
          ><v-text-field outlined dense v-model="price"></v-text-field
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
          ><v-text-field outlined dense v-model="tradeArea"></v-text-field
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
          ><v-radio-group v-model="shippingPrice" class="mt-0" row>
            <v-radio color="#7429ff" label="포함" value="yes"></v-radio>
            <v-radio
              color="#7429ff"
              label="미포함"
              value="no"
            ></v-radio> </v-radio-group
        ></v-col>
      </v-row>
      <v-row class="mb-10">
        <v-col align="center">
          <v-btn
            v-if="!checkRegisterCondition"
            large
            color="#BDBDBD"
            tile
            width="200"
            class="grey--text font-weight-bold"
            >등록하기</v-btn
          >
          <v-btn
            v-else
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
      title: null,
      content: null,
      price: null,
      tradeArea: null,
      shippingPrice: 'yes',
      selectCategory1: null,
      selectCategory2: null,
      category1: [],
      category2: [],
      itemImages: [
        {
          url: 'url',
          fileName: 'fileName'
        }
      ],
      snackbar: {
        status: false,
        text: null,
        color: null,
        timeout: 3000
      }
    };
  },
  computed: {
    category1NameList() {
      return this.category1.map((x) => x.categoryName);
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
    },
    categoryId() {
      return this.selectCategory2
        ? this.category2.find((x) => x.categoryName == this.selectCategory2).id
        : null;
    },
    checkRegisterCondition() {
      return !!this.title &&
        !!this.content &&
        !!this.price &&
        !!this.categoryId &&
        !!this.itemImages &&
        !!this.tradeArea
        ? true
        : false;
    }
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
      const item = {
        title: this.title,
        content: this.content,
        price: this.price,
        categoryId: this.categoryId,
        itemImages: this.itemImages,
        tradeArea: this.tradeArea,
        shippingPrice: this.shippingPrice
      };
      this.$store
        .dispatch('registItem', item)
        .then((response) => {
          this.snackbar.text = '상품등록을 성공하였습니다.';
          this.snackbar.color = 'primary';
          this.snackbar.status = true;
          setTimeout(() => this.$router.push({ name: 'MainRecommend' }), 2000);
          console.log(response);
        })
        .catch((e) => {
          console.log('등록실패');
          this.snackbar.text = '상품등록을 실패하였습니다.';
          this.snackbar.color = 'error';
          this.snackbar.status = true;
          console.log(e);
        });
      console.log('register');
    }
  },
  mounted() {
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
