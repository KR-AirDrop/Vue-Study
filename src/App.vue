<template>
  <!-- v-if 는 조건이 참일 때만 HTML 보여줌 -->
  <ProductDetail
    @closeModal="모달창열렸니 = false"
    :onerooms="onerooms"
    :clickroom="clickroom"
    :모달창열렸니="모달창열렸니"
  />

  <div class="menu">
    <a v-for="(a, i) in menu" :key="i">{{ a }}</a>
  </div>

  <DiscountModal />

  <CardList
    @openModal="
      모달창열렸니 = true;
      clickroom = $event;
    "
    @increaseReport="onerooms[i].report++"
    :oneroom="onerooms[i]"
    v-for="(a, i) in onerooms"
    :key="i"
  />
</template>

<script>
import data from "./assets/oneroom";
import DiscountModal from "./components/DiscountModal.vue";
import ProductDetail from "./components/ProductDetail.vue";
import CardList from "./components/CardList.vue";

export default {
  name: "App",
  data() {
    return {
      // 데이터 보관함 (react에서는 state라고 부르기도 함)
      menu: ["Home", "Products", "About"],
      products: ["역삼동원룸", "천호동원룸", "마포구원룸"],
      report: [0, 0, 0],
      onerooms: data,
      clickroom: 0,
      모달창열렸니: false,
    };
  },
  methods: {
    // 함수 보관함
    increase(i) {
      this.report[i]++;
    },
  },
  components: {
    DiscountModal,
    ProductDetail,
    CardList,
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

body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}

.close-btn {
  padding: 10px;
  background-color: skyblue;
  border-radius: 10px;
  border: none;
  font-weight: bold;
  cursor: pointer;
}
</style>
