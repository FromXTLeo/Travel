<template>
    <section>        
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-recommend></home-recommend>
    </section>
</template>
<script>
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcons from './components/Icons.vue'
import HomeRecommend from './components/Recommend.vue'
export default {
        name:'Home',
        components:{HomeHeader,HomeSwiper,HomeIcons,HomeRecommend}
    }
</script>
