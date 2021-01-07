<template>
  <div class="home">
    <!-- <UserImages /> -->
    <TestImages />
  </div>
</template>

<script>
// @ is an alias to /src
//import UserImages from "@/components/UserImages.vue";
import TestImages from "@/components/TestImages.vue";

export default {
  name: "Home",
  components: {
    //UserImages,
    TestImages,
  },
};
</script>
