<template>
  <div>
    <CardBanner style="height: 430px; margin-bottom: 100px" />
    <v-container>
      <h1 style="margin: 12px">오늘의 추천</h1>
      <v-row>
        <v-col
          v-for="item in 10"
          :key="item"
          cols="3"
          lg="3"
          md="3"
          sm="6"
          style="display: flex; justify-content: center"
        >
          <List :item="items" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import CardBanner from '~/components/home/CardBanner.vue';
import List from '~/components/home/HomeProductList.vue';

export default {
  name: 'MainPage',
  components: {
    CardBanner,
    List,
  },
  data() {
    return {
      items: { name: 'test', key: 33 },
    };
  },
};
</script>
