<template>
    <section>        
        <home-header></home-header>
        <home-swiper :imgList="data.swiperList"></home-swiper>
        <home-icons :iconList="data.iconList"></home-icons>
        <home-recommend :recommendList="data.recommendList"></home-recommend>
        <home-weekend :weekendList="data.weekendList"></home-weekend>
    </section>
</template>
<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
import {mapState} from 'vuex'
export default {
        name:'Home',
        data(){
            return{
                data:'',
                currentCity:''
            }
        },
        components:{HomeHeader,HomeSwiper,HomeIcons,HomeRecommend,HomeWeekend},
        mounted(){
            this.currentCity=this.city
            this.getHomeData()
        },
        computed:{
            ...mapState(['city'])
        },
        methods:{
            getHomeData(){
                axios.get('/api/index.json?city='+this.city).then(                    
                    this.getHomeDataSuc
                )
            },
            getHomeDataSuc(res){
                if(res.data.ret&&res.data)
                {                    
                    this.data=res.data.data                                   
                }
            }
        },
        activated(){
            if(this.currentCity!==this.city)
            {
                this.getHomeData()
                this.currentCity=this.city
            }
        }       

    }    
</script>
