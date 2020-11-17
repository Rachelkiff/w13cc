<template>
  <div id="song_list">
    <h1>This is your Song List</h1>
    <wishlist
      v-for="songchoice in songchoices"
      :key="songchoice.artist"
      :songchoice="songchoice"
      :isplaylist="true"/>
  </div>
</template>

<script>
import wishlist from "./wishlist.vue";
export default {
  name: "song-list",
  components: {
    wishlist,
  },
  computed: {
    songchoices: function () {
      return this.$store.state.songchoices;
    },
  },
};
</script>

<style scoped>
#song_list {
  border: 1px solid black;
}
</style>