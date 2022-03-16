<template>
  <navbar />

  <h1>길드 게시판</h1>
  <p>- vue로 만들었음 -</p>

  <generalForum :generalPost="generalPost" />
</template>

<script>
import navBar from "./components/navbar.vue";
import generalForum from "./components/generalForum.vue";
import generalPost from "./assets/generalPost";

export default {
  name: "App",
  data() {
    return {
      generalPost: generalPost,
    };
  },
  components: {
    navbar: navBar,
    generalForum,
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
