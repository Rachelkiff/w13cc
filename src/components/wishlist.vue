<template>
  <div id="songchoice">
    <h2>{{ songchoice.Songtitle }}</h2>
    <h3>{{ songchoice.Artist }}</h3>

    <button @click="addTowishlist(songchoice)" v-if="!isplaylist">
    </button>
    <button @click="removefromwishlist(songchoice)" v-else>
    </button>
  </div>
</template>

<script>
export default {
  name: "wishlist",
  props: {
    course: {
      type: Object,
      required: true,
    },
     isplaylist: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    addTowishlist: function (songchoice) {
      this.$store.commit("towishlist", songchoice);
    },
    removefromwishlist: function (songchoice) {
      this.$store.commit("fromwishlist", songchoice);
    },
  },
};
</script>

<style scoped>
</style>