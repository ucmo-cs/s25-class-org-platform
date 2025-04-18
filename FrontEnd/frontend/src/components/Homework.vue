<script>
  export default {
    props: ['homeworkID'],
    data() {
      return {
        homework: {
          "0": {"Class": 0, "Date": "0/0/0", "FileID": 0},
          "1": {"Class": 1, "Date": "1/1/1", "FileID": 1},
          "2": {"Class": 2, "Date": "2/2/2", "FileID": 2}
        },
      }
    },
    methods: {
      getHomework(homeworkID) {
        // do api call for favorites of all types here.
        return this.homework[homeworkID]
      }
    }
  }
</script>

<template>
  <body>
    <h1>{{ $props.homeworkID }}</h1>
  </body>
</template>

<style scoped>

</style>