
<template>
  <p>name: {{starship.name}}</p>
</template>
<script>
import swapiService from "@/services/swapiServices";  

export default {
  props: ["selectedStarship"],
  data() {
    return {
      starship: {}
    };
  },
  watch: {
    selectedStarship() {
      this.getData();
    }
  },
  methods: {
    async getData(id) {
      id = this.selectedStarship;
      const res = await swapiService.getStarship(id);
      this.starship = res;
    }
  },
  created() {
    this.getData();
  }
};
</script>