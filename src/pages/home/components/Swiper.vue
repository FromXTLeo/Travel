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
                src:'http://img1.qunarzz.com/piao/fusion/1805/77/f63bd04dd5319602.jpg_750x200_6ba8e0ca.jpg'
            },
            {
                id:2,
                src:'http://img1.qunarzz.com/piao/fusion/1804/39/3a0d729eb287b102.jpg_750x200_fda1a9b8.jpg'
            },
            {
                id:3,
                src:'http://img1.qunarzz.com/piao/fusion/1804/f2/91b285a08ee21c02.jpg_750x200_8a73fd08.jpg'
            },
            {
                id:4,
                src:'http://img1.qunarzz.com/piao/fusion/1803/dd/466fb314a22bd702.jpg_750x200_25ea4968.jpg'
            },
            {
                id:5,
                src:'http://img1.qunarzz.com/piao/fusion/1805/7a/be20059ce3ed3e02.jpg_750x200_83310ff2.jpg'
            },
            {
                id:6,
                src:'http://img1.qunarzz.com/piao/fusion/1804/3e/4d6e12949f74fc02.jpg_750x200_22aba1bb.jpg'
            }
        ],
        swiperOption: {
            pagination:'.swiper-pagination',
            loop:true,
            autoplay:3000
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
        padding-bottom :30.25%        
        .swiper-img
            width :100%;
</style>

