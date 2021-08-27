<template>
  <div id="app">
    <v-container fluid>
      <v-row align="center">
        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" label="Standard"></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" filled label="Filled style"></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" label="Outlined style" outlined></v-select>
        </v-col>

        <v-col class="d-flex" cols="12" sm="6">
          <v-select :items="items" label="Solo field" solo></v-select>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  setup() {},
  data: () => ({
    items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
  }),
};
</script>
<style scoped></style>
