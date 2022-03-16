<template>
  <h2>상세 페이지에용~~~</h2>
  <h4>-{{ generalPost[$route.params.id].title }}</h4>
  <p>-{{ generalPost[$route.params.id].date }}</p>
  <p>-{{ generalPost[$route.params.id].content }}</p>
</template>

<script>
export default {
  name: "detailPage",
  props: {
    generalPost: Array,
  },
};
</script>

<style></style>
