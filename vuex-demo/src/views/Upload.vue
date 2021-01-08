<template>
  <v-form @submit.prevent="uploadImage">
    <h2>{{ imageURL }}</h2>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field label="Image URL" id="imageURL" required></v-text-field>
          <v-btn class="mr-4" type="submit"> submit </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "Upload.vue",
  data() {
    return {
      //imageURL: "",
      newImage: {},
    };
  },
  methods: {
    uploadImage: function (submitEvent) {
      const newImage = {
        url: submitEvent.target.elements.imageURL.value,
        author: this.$store.state.users.currentUser,
      };

      this.$store.commit("uploadImage", newImage);
    },
  },
  computed: {
    currentUser() {
      return this.$store.state.users.currentUser;
    },
  },
};
</script>

<style>
h2 {
  font-size: 5rem;
  color: black;
}
</style>