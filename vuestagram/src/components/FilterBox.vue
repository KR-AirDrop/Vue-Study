<template>
  <div
    :class="filter + ' filter-item'"
    :style="`background-image: url(${uploadImgUrl}) `"
  >
    <span class="filter-name" @click="fire">{{ filter }}</span>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    uploadImgUrl: String,
    filter: String,
  },
  methods: {
    fire() {
      this.emitter.emit("filter", this.filter);
    },
  },
};
</script>

<style>
.filter-item {
  width: 110px;
  height: 110px;
  margin: 10px 10px 10px auto;
  padding: 3px;
  display: inline-block;
  color: white;
  background-size: cover;
  background-position: center;
}

.filter-name {
  color: white;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 3px;
  border-radius: 5px;
  cursor: pointer;
}
</style>
