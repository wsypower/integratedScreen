import Vue from "vue";
import Vuex from "vuex";
import screen from "./screen";
//store
const store = new Vuex.Store({
  modules: {
    screen,
  },
});

export default store;
