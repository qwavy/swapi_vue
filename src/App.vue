<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <h1>s</h1>
  <p>{{selectedPerson}}</p>
  <person-list @select="onselectedPerson"/>
  <person-details :selectedPerson="selectedPerson" v-if="selectedPerson !== null"/>
  {{selectedPlanet}}
  <planet-list @select="onselectedPlanet"/>
  {{selectedStarship}}
  <planet-details :selectedPlanet="selectedPlanet" v-if="selectedPlanet !==null"/>
  <starship-list @select="onselectedStarship"/>
  <starship-details/>
</template>

<script>
import PersonList from "./components/PersonList"
import PersonDetails from "./components/PersonDetails"
import PlanetList from "./components/PlanetList"
import PlanetDetails from "./components/PlanetDetails"
import StarshipList from "./components/StarshipList"
import StarshipDetails from "./components/StarshipDetails"
export default {
  name: 'App',
  data(){
    return{
      selectedPerson: null,
      selectedPlanet:null,
      selectedStarship:null
    }
  },
  methods:{
    onselectedPerson(id){
      this.selectedPerson = id
    },
    onselectedPlanet(id){
      this.selectedPlanet = id
    },
    onselectedStarship(id){
      this.selectedStarship = id
    }
  },
  components:{
    PersonList,
    PersonDetails,
    PlanetDetails,
    PlanetList,
    StarshipList,
    StarshipDetails
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
