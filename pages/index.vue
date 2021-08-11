<template>
  <div>
    <CardBanner/>
    <List/>
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
}
</script>
