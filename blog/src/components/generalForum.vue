<template>
  <div>
    <h2>자유게시판</h2>
    <div v-for="(a, i) in generalPost" :key="i">
      <h4 @click="$router.push(`/detail/${i}`)" class="postTitle">
        {{ a.title }}
      </h4>
      <p>D-day : {{ a.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "generalForum",
  props: {
    generalPost: Array,
  },
};
</script>

<style>
.postTitle {
  cursor: pointer;
}
</style>
