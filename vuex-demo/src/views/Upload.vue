<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            label="Image URL"
            v-model="imageURL"
            required
          ></v-text-field>
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
      imageURL: "",
      newImage: {},
    };
  },
  methods: {
    uploadImage: function (imageURL, author) {
      const newImage = {
        url: imageURL,
        author: this.$store.state.users.currentUser,
      };

      this.store.commit("uploadImage", newImage);
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