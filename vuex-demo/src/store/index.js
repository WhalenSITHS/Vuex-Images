import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accounts: [{ userName: "Mike", age: 31 }],
    uploads: [
      {
        url:
          "https://cdn.pixabay.com/photo/2020/12/20/10/01/advent-5846564_960_720.jpg",
        author: "Mike",
      },
      {
        url:
          "https://cdn.pixabay.com/photo/2020/03/01/12/36/fire-4892711_960_720.jpg",
        author: "Tessa",
      },
      {
        url:
          "https://cdn.pixabay.com/photo/2020/12/25/09/46/dog-5858985_960_720.jpg",
        author: "Olberic",
      },
      {
        url:
          "https://cdn.pixabay.com/photo/2019/03/15/09/49/girl-4056684_960_720.jpg",
        author: "Ninja",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
