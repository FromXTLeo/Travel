<template>
    <section>        
        <home-header></home-header>
        <home-swiper :imgList="this.data.imgList"></home-swiper>
        <home-icons :iconList="this.data.iconList"></home-icons>
        <home-recommend :recommendList="this.data.recommendList"></home-recommend>
        <home-weekend :weekendList="this.data.weekendList"></home-weekend>
    </section>
</template>
<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeWeekend from './components/Weekend.vue'
import axios from 'axios'
export default {
        name:'Home',
        data(){
            return{
                data:''
            }
        },
        components:{HomeHeader,HomeSwiper,HomeIcons,HomeRecommend,HomeWeekend},
        mounted(){
            this.getHomeData()
        },
        methods:{
            getHomeData(){
                axios.get('/api/index.json').then(
                    this.getHomeDataSuc
                )
            },
            getHomeDataSuc(res){
                if(res.data.ret&&res.data)
                {
                    this.data=res.data
                    
                }
            }
        }
    }    
</script>
