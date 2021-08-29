<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-avatar
          color="brown"
          style="align-self: center"
          min-width="200"
          min-height="200"
        >
          <span class="white--text text-h5">SW</span>
        </v-avatar>
      </v-col>
      <v-col cols="8">
        <div class="d-flex flex-row">
          <h1>상점이름</h1>
          <v-btn>상점명 변경</v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-btn
        color="primary"
        class="text-none"
        rounded
        depressed
        :loading="isSelecting"
        @click="onButtonClick"
      >
        <v-icon left> cloud_upload </v-icon>
        {{ buttonText }}
      </v-btn>
      <input
        ref="uploader"
        class="d-none"
        type="file"
        accept="image/*"
        @change="onFileChanged"
    /></v-row>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selectedFile: null,
      isSelecting: false,
      defaultButtonText: '이미지 변경',
    };
  },
  computed: {
    buttonText() {
      return this.selectedFile
        ? this.selectedFile.name
        : this.defaultButtonText;
    },
  },
  methods: {
    onButtonClick() {
      this.isSelecting = true;
      window.addEventListener(
        'focus',
        () => {
          this.isSelecting = false;
        },
        { once: true },
      );

      this.$refs.uploader.click();
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files[0];

      // do something
    },
  },
};
</script>

<style scoped></style>
