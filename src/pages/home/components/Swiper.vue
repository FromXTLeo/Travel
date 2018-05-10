<template>
    <div class="swiper-box">
        <swiper :options="swiperOption">
        <!-- slides -->    
        <swiper-slide v-for="item in imgList" :key="item.id">
            <img class="swiper-img" :src="item.src" alt="">
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
        imgList:[
            {
                id:1,
                src:'//img1.qunarzz.com/qs/1805/f6/ed3f589004da902.jpg'
            },
            {
                id:2,
                src:'//img1.qunarzz.com/qs/1805/f6/ed3f589004da902.jpg'
            },
            {
                id:3,
                src:'//img1.qunarzz.com/qs/1805/f6/ed3f589004da902.jpg'
            },
            {
                id:4,
                src:'//img1.qunarzz.com/qs/1805/f6/ed3f589004da902.jpg'
            },
            {
                id:5,
                src:'//img1.qunarzz.com/qs/1805/f6/ed3f589004da902.jpg'
            },
            {
                id:6,
                src:'//img1.qunarzz.com/qs/1805/f6/ed3f589004da902.jpg'
            }
        ],
        swiperOption: {
            pagination:'.swiper-pagination',
            loop:true
        }
      }
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
        padding-bottom :31.25%        
        .swiper-img
            width :100%;
</style>

