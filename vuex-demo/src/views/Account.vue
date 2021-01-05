<template>
  <v-container fluid>
    <v-layout row wrap align-center justify-space-around>
      <v-flex xs6>
        <h2>Welcome {{ currentUser }}</h2>
      </v-flex>
      <v-flex xs4>
        <v-select
          @change="signIn"
          v-model="user"
          :items="accounts"
          item-text="userName"
          item-value="userName"
          menu-props="auto"
          hide-details
          label="Select"
          single-line
        ></v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      user: "",
      items: [],
    };
  },
  methods: {
    test: function(user) {
      alert(user);
    },
    signIn: function(user) {
      this.$store.commit("changeUser", user);
    },
  },
  computed: {
    accounts() {
      return this.$store.state.users.accounts;
    },
    currentUser() {
      return this.$store.state.users.currentUser;
    },
  },
};
</script>

<style></style>
