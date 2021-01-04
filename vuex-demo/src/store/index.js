import Vue from "vue";
import Vuex from "vuex";
import * as users from "@/store/modules/users.js";
import * as uploads from "@/store/modules/uploads.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { users, uploads },
});
