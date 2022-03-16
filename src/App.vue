<template>
  <!-- v-if 는 조건이 참일 때만 HTML 보여줌 -->
  <transition name="fade">
    <ProductDetail
      @closeModal="모달창열렸니 = false"
      :onerooms="onerooms"
      :clickroom="clickroom"
      :모달창열렸니="모달창열렸니"
    />
  </transition>

  <div class="menu">
    <a v-for="(a, i) in menu" :key="i">{{ a }}</a>
  </div>

  <transition name="fade">
    <div class="discount" v-if="showDiscount == true">
      <h2>지금 결제하면 {{ discountRate }}% 할인 !!!</h2>
    </div>
  </transition>

  <button @click="priceSort">낮은가격순</button>
  <button @click="priceSortReverse">높은가격순</button>
  <button @click="titleSort">이름순</button>
  <button @click="sortReturn">원래대로</button>

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
      originalOnerooms: data,
      onerooms: [...data],
      clickroom: 0,
      모달창열렸니: false,
      showDiscount: true,
      discountRate: 30,
    };
  },
  methods: {
    // 함수 보관함
    priceSort() {
      this.onerooms.sort(function (a, b) {
        return a.price - b.price;
      });
    },
    priceSortReverse() {
      this.onerooms.sort(function (a, b) {
        return b.price - a.price;
      });
    },
    titleSort() {
      this.onerooms.sort(function (a, b) {
        let x = a.title.toLowerCase();
        let y = b.title.toLowerCase();
        if (x < y) {
          return -1;
        }
        if (x > y) {
          return 1;
        }
        return 0;
      });
    },
    sortReturn() {
      this.onerooms = [...this.originalOnerooms];
    },
  },

  //데이터만 생성
  created() {},

  // 마운트 이후
  mounted() {
    setTimeout(() => {
      this.showDiscount = false;
    }, 30000);
    setInterval(() => {
      this.discountRate--;
    }, 1000);
  },

  components: {
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

.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
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

.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}
</style>
