<template>
  <v-form>
    <v-container>
      <h2>{{ imageURL }}</h2>
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
      imageURL: "harry",
    };
  },
  methods: {},
};
</script>

<style>
h2 {
  font-size: 5rem;
  color: black;
}
</style>