import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      age: 20,
      more: {},
    };
  },
  mutations: {
    plusAge(state) {
      state.age++;
    },
    setMore(state, data) {
      state.more = data;
    },
  },
  actions: {
    getData(context) {
      axios.get("https://codingapple1.github.io/vue/more0.json").then((a) => {
        console.log(a.data);
        context.commit("setMore", a.data);
      });
    },
  },
});

export default store;
