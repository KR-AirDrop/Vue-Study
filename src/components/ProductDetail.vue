<template>
  <div class="black-bg" v-if="모달창열렸니">
    <div class="white-bg">
      <img :src="onerooms[clickroom].image" class="room-img" />
      <h4>{{ onerooms[clickroom].title }}</h4>
      <p>{{ onerooms[clickroom].content }}</p>
      <p>월 {{ onerooms[clickroom].price }}</p>
      <input v-model="month" />
      <!--  @input="month = $event.target.value" -->
      <p>{{ month }}개월, 총 {{ onerooms[clickroom].price * month }}원</p>

      <button class="close-btn" @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductDetail",
  data() {
    return {
      month: 1,
    };
  },
  watch: {
    month() {
      const reg = /[^0-9]/g;
      if (reg.test(this.month) === true) {
        alert("숫자만 넣으셈");
        this.month = 1;
      }
    },
  },
  props: {
    onerooms: Array,
    clickroom: Number,
    모달창열렸니: Boolean,
  },
};
</script>

<style></style>
