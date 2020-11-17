<template>
  <div>
    <h1></h1>
    <div id="page_body">
      <playlist></playlist>
      <songlist></songlist>
    </div>
  </div>
</template>

<script>
import playlist from "./play-list.vue";
import songlist from "./song-list.vue";
export default {
  name: "page-body",
  components: {
    playlist,
    songlist
  },
};
</script>

<style scoped>
#page_body {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>