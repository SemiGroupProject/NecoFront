<template>
  <v-card
    outlined
    flat
    style="width: 200px; height: 250px"
    :href="`/item/${item.key}`"
  >
    <v-img
      style="width: 200px; height: 170px"
      :src="require('@/img/look.jpg')"
    />
    <v-card-title> 일어나세요 </v-card-title>
    <v-card-subtitle> 1,400,000원 </v-card-subtitle>
  </v-card>
</template>
<script>
export default {
  name: '',
  props: {
    item: { type: Object, default: null }
  }
};
</script>
<style scoped></style>
