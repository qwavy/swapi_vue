<template>
  <div>
    <h3>name:{{person.name}}</h3>
    <p>eye color :{{person.eyeColor}}</p>
    <p>bby : {{person.birthYear}}</p>
  </div>
</template>

<script>
import swapiService from "@/services/swapiServices";
export default {
  props: ["selectedPerson"],
  data() {
    return {
      person: {}
    };
  },
  watch: {
    selectedPerson() {
      this.getData();
    }
  },
  methods: {
    async getData(id) {
      id = this.selectedPerson;
      const res = await swapiService.getPerson(id);
      this.person = res;
    }
  },
  created() {
    this.getData();
  }
};
</script>