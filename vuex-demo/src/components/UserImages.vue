<template>
  <div class="gallery">
    <div class="gallery-item" v-for="item in userImages" :key="item">
      <h2 class="gallery-item-author">{{ item.author }}</h2>
      <img class="gallery-image" :src="item.url" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userImages() {
      return this.$store.state.uploads;
    },
  },
};
</script>

<style>
.gallery {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 80vw;
  flex-wrap: wrap;
  margin: 1rem auto;
  padding: 3rem auto;
}
.gallery-item {
  width: 30%;
  height: 20rem;
  margin: 2rem auto;
  background-color: grey;
  overflow: hidden;
}
.gallery-item-author {
  font-size: 1.5rem;
}
.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
