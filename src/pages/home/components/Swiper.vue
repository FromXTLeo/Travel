<template>
    <div class="swiper-box">
        <swiper :options="swiperOption">
        <!-- slides -->    
        <swiper-slide v-for="item in imgList" :key="item.id">
            <img class="swiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>
        
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>    
        </swiper>
    </div>
</template>
<script>
export default {
    name:'HomeSwiper',
    data() {
      return {        
        swiperOption: {
            pagination:'.swiper-pagination',
            loop:true,
            autoplay:3000
        }
      }
    },
    props:{
       imgList:'' 
    }
}
</script>
<style lang="stylus" scoped>
    .swiper-box >>> .swiper-pagination-bullet-active
        background :#fff;
    .swiper-box
        //消除swiper下方标签抖动问题
        overflow :hidden
        width :100%
        height :0
        padding-bottom :35%        
        .swiper-img
            width :100%;
</style>

