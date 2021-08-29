<template>
  <v-main style="margin: 0 12.5%">
    <card-banner></card-banner>
    <v-container fluid>
      <h2>오늘의 추천</h2>
      <v-row class="my-10">
        <v-col
          v-for="item in 10"
          :key="item"
          cols="2.5"
          style="display: flex; justify-content: center"
        >
          <RecommendItem :item="items" />
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import CardBanner from '@/components/CardBanner.vue';
import RecommendItem from '@/components/RecommendItem.vue';
export default {
  components: {
    CardBanner,
    RecommendItem
  },
  data() {
    return {
      items: { name: 'test', key: 33 }
    };
  }
};
</script>

<style></style>
