<template>
  <div>
    <Post :vuestaData="vuestaData" />
    <Post />
    <Post />
  </div>
</template>

<script>
import Post from "./Post.vue";
export default {
  name: "Container",
  components: {
    Post,
  },
  props: {
    vuestaData: Array,
  },
};
</script>

<style></style>
