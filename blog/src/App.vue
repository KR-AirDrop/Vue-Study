<template>
  <navbar />
  <div class="container mt-4">
    <router-view :generalPost="generalPost"></router-view>
  </div>
  <!-- <generalForum :generalPost="generalPost" /> -->
</template>

<script>
import navbar from "./components/navbar.vue";
import generalPost from "./assets/generalPost";

export default {
  name: "App",
  data() {
    return {
      generalPost: generalPost,
    };
  },
  components: {
    navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
