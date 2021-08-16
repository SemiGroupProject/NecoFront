<template>
  <div>
    <v-container class="main_container">
      <LayoutHeader style="max-width: 100%"/>
      <Nuxt/>
      <LayoutFooter/>
    </v-container>
  </div>
</template>

<script>
import LayoutHeader from '~/components/layout/header.vue';
import LayoutFooter from '~/components/layout/footer.vue';

export default {
  name: 'MainPageLayout',
  components: {
    LayoutHeader,
    LayoutFooter,
  },
}
</script>

<style scoped>
.main_container {
  margin: 0;
  padding: 0;
  min-width: 100%;
}
</style>
