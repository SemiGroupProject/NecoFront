<template>
  <v-card flat>
    <h4>연관 상품</h4>
    <v-row>
      <v-col cols="2" v-for="item in items" :key="item.name">
        <v-img :src="require(`@/img/${item.image}`)" height="200"></v-img>
        <p class="item-name">{{ item.name }}</p>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: '빅사이즈 옷',
          image: 'test_image.jpg'
        },
        {
          name: '덩크 로우',
          image: 'test_image.jpg'
        }
      ]
    };
  }
};
</script>

<style scoped>
h4 {
  margin-bottom: 15px;
}
.item-name {
  margin-top: 10px;
  text-align: center;
}
</style>
