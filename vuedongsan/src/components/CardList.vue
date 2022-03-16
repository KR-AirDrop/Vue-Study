<template>
  <div>
    <img :src="oneroom.image" class="room-img" />
    <h3 @click="$emit('openModal', oneroom.id)">{{ oneroom.title }}</h3>
    <p>월 {{ oneroom.price }}</p>
    <button @click="$emit('increaseReport')">허위매물 신고</button>
    <span> 신고 : {{ oneroom.report }} </span>
  </div>
</template>

<script>
export default {
  name: "CardList",
  props: {
    oneroom: Object,
  },
};
</script>

<style></style>
