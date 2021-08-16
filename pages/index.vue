<template>
  <div>
    <CardBanner />
    <h1>오늘의 추천</h1>
    <v-row>
      <v-col
        v-for="item in 10"
        :key="item"
        cols="3"
        lg="3"
        md="4"
        sm="6"
        style="display: flex; justify-content: center"
      >
        <List />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import CardBanner from '~/components/home/cardBanner.vue';
import List from '~/components/home/list.vue';

export default {
  name: 'MainPage',
  components: {
    CardBanner,
    List,
  },
};
</script>
