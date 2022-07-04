<template>
    <div>
        <h3>name:{{data.name}}</h3>
        <p>eye color :{{data.eyeColor}}</p>
        <p>bby : {{data.birthYear}}</p>
    </div>
</template>

<script>
import swapiService from '@/services/swapiServices'
export default {
    props:["selectedPerson"],
    data(){
        return{
            data:{
                
            }
        }
    },
    methods: {
        async getData(){
            const res = await swapiService.getPerson(5)
            this.data = res
        }
    },
    created(){
        this.getData()
    }
}
</script>