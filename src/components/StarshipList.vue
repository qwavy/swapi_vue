<template>
  <div class="list">
    <div v-for="item in list" :key="item.id" @click="$emit('select',item.id)">{{item.name}}</div>
  </div>
</template>
<script>
import swapiService from "@/services/swapiServices";

export default {
  emits: ["select"],
  data() {
    return {
      list: []
    };
  },
  methods: {
    async getData() {
      const res = await swapiService.getStarship();
      this.list = res;
    }
  },
  created() {
    this.getData();
  }
};
</script>
<style scoped>
.list {
  background-color: black;
  color: white;
  font-size: large;
  border: 1px solid white;
  border-radius: 12px;
  padding-left: 260px;
  padding-top: 80px;
  width: 500px;
  height: 300px;
}
</style>