<template>
  <div class="header">
    <ul class="header-button-left">
      <li v-if="step != 0" @click="step = 0">Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">Publish</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <p>age: {{ $store.state.age }}</p>
  <button @click="$store.commit('plusAge')">age+1</button>

  <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">더보기 버튼</button>

  <Container
    @write="uploadContent = $event"
    :vuestaData="vuestaData"
    :step="step"
    :uploadImgUrl="uploadImgUrl"
  />
  <div v-if="step == 0">
    <button @click="more">더보기</button>
  </div>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>
</template>

<script>
import vuestaData from "./assets/vuestaData";
import Container from "./components/Container.vue";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      vuestaData: vuestaData,
      moreCount: 0,
      step: 0,
      uploadImgUrl: "",
      uploadContent: "",
      filter: "",
    };
  },
  mounted() {
    this.emitter.on("filter", (filter) => {
      this.filter = filter;
    });
  },
  components: {
    Container,
  },
  methods: {
    publish() {
      var newPost = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: this.uploadImgUrl,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.uploadContent,
        filter: "perpetua",
      };
      newPost.filter = this.filter;
      this.vuestaData.unshift(newPost);
      this.step = 0;
    },
    upload(e) {
      let file = e.target.files;
      let imgUrl = URL.createObjectURL(file[0]);
      this.step = 1;
      this.uploadImgUrl = imgUrl;
    },
    more() {
      if (this.moreCount == 0) {
        axios
          .get("https://codingapple1.github.io/vue/more0.json")
          .then((result) => {
            this.vuestaData.push(result.data);
            this.moreCount++;
          });
      } else if (this.moreCount == 1) {
        axios
          .get("https://codingapple1.github.io/vue/more1.json")
          .then((result) => {
            this.vuestaData.push(result.data);
            this.moreCount++;
          });
      }
    },
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
