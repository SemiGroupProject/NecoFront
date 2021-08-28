<template>
  <v-main style="margin: 0 12.5%">
    <v-container>
      <h2>공지사항</h2>
      <v-data-table
        :headers="headers"
        :items="noticeList"
        :items-per-page="5"
        @click:row="clickNotice"
        style="cursor: pointer"
        class="ma-5"
      ></v-data-table>
    </v-container>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: '번호', value: 'id' },
        { text: '제목', value: 'title' },
        { text: '작성자', value: 'user' },
        { text: '작성일', value: 'date' }
      ],
      noticeList: [
        {
          id: 1,
          title: '[공지] 사이트 안내사항1',
          user: '운영자',
          date: '2021-08-28'
        },
        {
          id: 2,
          title: '[공지] 사이트 안내사항2',
          user: '운영자',
          date: '2021-08-28'
        },
        {
          id: 3,
          title: '[공지] 사이트 안내사항3',
          user: '운영자',
          date: '2021-08-28'
        },
        {
          id: 4,
          title: '[공지] 사이트 안내사항4',
          user: '운영자',
          date: '2021-08-28'
        }
      ]
    };
  },
  methods: {
    clickNotice(data) {
      console.log('click notice');
      this.$router.push({
        name: 'notice-item',
        params: { id: data.id }
      });
    }
  }
};
</script>

<style>
h2 {
  margin-top: 50px;
  color: #8f68d6;
}
</style>
