<template>
  <v-row>
    <v-col
      v-for="item in userImages"
      :key="item"
      class="d-flex child-flex"
      cols="4"
    >
      <v-card class="mx-auto" max-width="344">
        <v-img :src="item.url" height="200px"></v-img>

        <v-card-title> {{ item.author }} </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  computed: {
    userImages() {
      return this.$store.state.uploads.uploads;
    },
  },
};
</script>