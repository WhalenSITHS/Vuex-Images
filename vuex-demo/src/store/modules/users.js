export const state = {
  accounts: [
    { userName: "Mike", age: 31 },
    { userName: "Tressa", age: 28 },
    { userName: "Olberic", age: 36 },
    { userName: "Therion", age: 27 },
  ],
  currentUser: "",
};

export const mutations = {
  changeUser(state, payload) {
    state.currentUser = payload;
  },
};
