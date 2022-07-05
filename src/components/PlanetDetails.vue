<template>
  <p>name: {{planet.name}}</p>
</template>
<script>
import swapiService from "@/services/swapiServices";

export default {
  props: ["selectedPlanet"],
  data() {
    return {
      planet: {}
    };
  },
  watch: {
    selectedPlanet() {
      this.getData();
    }
  },
  methods: {
    async getData(id) {
      id = this.selectedPlanet;
      const res = await swapiService.getPlanet(id);
      this.planet = res;
    }
  },
  created() {
    this.getData();
  }
};
</script>