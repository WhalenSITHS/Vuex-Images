<template>
  <v-container fluid>
    <v-layout row wrap align-center>
      <v-flex xs6>
        <h2>{{ accounts[0].userName }}</h2>
      </v-flex>
      <v-flex xs6>
        <v-select
          @change="test"
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
  },
  computed: {
    accounts() {
      return this.$store.state.users.accounts;
    },
  },
};
</script>

<style></style>
