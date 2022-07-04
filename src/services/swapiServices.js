import API from "./api";

class Service{

    getPeople = async ()=>{
        try{
            const response = await API.get('/people')
            return response.data.results.map(this._transformPerson)
        }catch(e){
            console.log({e})
        }
    }
    getPerson = async(id)=>{
        try{
            const response = await API.get(`/people/${id}`)
            return this._transformPerson(response.data)
        }catch(e){
            console.log({e})
        }
    }
    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    }
}

const swapiService = new Service

export default swapiService