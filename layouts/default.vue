<template>
  <div>
    <LayoutHeader/>
    <Nuxt/>
    <LayoutFooter/>
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
