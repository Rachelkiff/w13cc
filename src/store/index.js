import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    songchoice: [{ Songtitle: "Protect Ya Neck", artist: "Wutang Clan" }, { Songtitle: "C.R.E.A.M", artist: "Wutang Clan"}, { Songtitle: "Bring Da Ruckus", artist: "Wutang Clan" }, { Songtitle: "Gravel Pit", artist: "Wutang Clan" }, { Songtitle: "Method Man", artist: "Wutang Clan"}],
    wishlist: []
  },
  mutations: {
    toplaylist: function (state, addedsongchoice) {
      state.wishlist.push(addedsongchoice);
      for (let i = 0; i < state.songchoice.length; i++) {
        if (state.songchoice[i] == addedsongchoice) {
          state.songchoice.splice(i, 1);
        }
      }
    },
    fromplaylist: function (state, deletedsongchoice) {
      state.songchoice.push(deletedsongchoice);
      for (let i = 0; i < state.songlist.length; i++) {
        if (state.songlist[i] == deletedsongchoice) {
          state.songlist.splice(i, 1);
        }
      }

    }
  },
  actions: {},
  modules: {}
});