<template>
  <v-container>
    <h1 style="margin: 12px">{{ category }}</h1>
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
        <List />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import List from '~/components/home/HomeProductList.vue';

export default {
  name: 'MainPage',
  components: {
    List,
  },
  asyncData({ params }) {
    return {
      category: params.category,
      page: params.page,
    };
  },
  data() {
    return {};
  },
};
</script>
