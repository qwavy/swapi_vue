<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <h1>s</h1>
  <p>{{selectedPerson}}</p>
  <person-list @select="onselectedPerson"/>
  <person-details :selectedPerson="selectedPerson" v-if="selectedPerson !== null"/>
</template>

<script>
import PersonList from "./components/PersonList"
import PersonDetails from "./components/PersonDetails"
export default {
  name: 'App',
  data(){
    return{
      selectedPerson: null
    }
  },
  methods:{
    onselectedPerson(id){
      this.selectedPerson = id
    }
  },
  components:{
    PersonList,
    PersonDetails
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
