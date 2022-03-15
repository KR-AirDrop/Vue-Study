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
    :oneroom="onerooms[i]"
    v-for="(a, i) in onerooms"
    :key="i"
  />
  <!-- <div v-for="(data, i) in onerooms" :key="i">
    <img :src="data.image" class="room-img" />
    <h3
      @click="
        모달창열렸니 = true;
        clickroom = i;
      "
    >
      {{ data.title }}
    </h3>
    <p>월 {{ data.price }}</p>
     <button @click="data.report++">허위매물 신고</button>
    <span> 신고 : {{ data.report }} </span>
  </div> -->

  <!-- 
  <div>
    <img src="./assets/room1.jpg" class="room-img" />

    <h4>{{ products[1] }}</h4>
    <p>700 만원</p>
    <button @click="increase(1)">허위매물 신고</button>
    <span> 신고 : {{ report[1] }} </span>
  </div>

  <div>
    <img src="./assets/room2.jpg" class="room-img" />

    <h4>{{ products[2] }}</h4>
    <p>900 만원</p>
    <button @click="increase(2)">허위매물 신고</button>
    <span> 신고 : {{ report[2] }} </span>
  </div> -->
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
