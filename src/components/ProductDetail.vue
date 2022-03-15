<template>
  <div class="black-bg" v-if="모달창열렸니">
    <div class="white-bg">
      <img :src="onerooms[clickroom].image" class="room-img" />
      <h4>{{ onerooms[clickroom].title }}</h4>
      <p>{{ onerooms[clickroom].content }}</p>
      <p>월 {{ onerooms[clickroom].price }}</p>
      <button class="close-btn" @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  props: {
    onerooms: Array,
    clickroom: Number,
    모달창열렸니: Boolean,
  },
};
</script>

<style></style>
