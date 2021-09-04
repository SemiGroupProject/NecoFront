<template>
  <v-main style="margin: 0 12.5%">
    <v-container fluid>
      <image-property></image-property>
      <relation-item></relation-item>
      <information-text></information-text>
      <question-input></question-input>
      <question-reply></question-reply>
    </v-container>
  </v-main>
</template>

<script>
import ImageProperty from '@/cards/item/ImageProperty.vue';
import RelationItem from '@/cards/item/RelationItem.vue';
import InformationText from '@/cards/item/InformationText.vue';
import QuestionInput from '@/cards/item/QuestionInput.vue';
import QuestionReply from '@/cards/item/QuestionReply.vue';

export default {
  components: {
    ImageProperty,
    RelationItem,
    InformationText,
    QuestionInput,
    QuestionReply
  }
};
</script>

<style></style>
