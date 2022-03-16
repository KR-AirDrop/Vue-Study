<template>
  <div v-for="(a, i) in vuestaData" :key="i">
    <Post :vuestaData="vuestaData" :index="i" />
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
