<template>
  <div id="app">
    <page-body></page-body>
    
  </div>
</template>

<script>
import PageBody from "./components/page-body.vue";



export default {
  name: "app",
  components: {
    PageBody,
   


  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
