<template>
  <div class="home">
    <UserImages />
  </div>
</template>

<script>
// @ is an alias to /src
import UserImages from "@/components/UserImages.vue";

export default {
  name: "Home",
  components: {
    UserImages,
  },
};
</script>
