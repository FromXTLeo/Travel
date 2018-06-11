<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :listData=data></city-list>
        <city-alphabet :alphabetData=data.cities></city-alphabet>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './component/Header.vue'
import CitySearch from './component/Search.vue'
import CityList from './component/List.vue'
import CityAlphabet from './component/Alphabet.vue'
export default {
    name:'City',
    data(){
        return{
            data:''
        }
    },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    mounted(){
        this.getCityinfo()
    },
    methods:{
        getCityinfo(){
            axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
        },
        handleGetCityInfoSucc(res){
            if(res.data.ret)
                this.data=res.data.data
            console.log(this.data)
        }
    }
}
</script>

<style>

</style>
