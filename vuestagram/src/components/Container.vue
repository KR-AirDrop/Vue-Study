<template>
  <Post :vuestaData="a" v-for="(a, i) in vuestaData" :key="i" />
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
