<script>
  import Calendar from './components/Calendar.vue'
  

  export default {
    components: {
      Calendar
    }
  }
</script>




<template>
  <head>
    <title></title>
  </head>
  <body>
    <div class="sideBar"></div>
    <div class="topBar"></div>
    <Calendar/>

  </body>
</template>

  
<style>
html, body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
  }
  .topBar {
    width: 100%;
    height: 100px;
    background: #222222;
    position: fixed;
    margin-top: 0;
  }
  .sideBar {
    margin-top: 100px;
    margin-left: 0;
    width: 350px;
    height: 100%;
    background: #2c3e50;
    position: fixed;
  }
</style>