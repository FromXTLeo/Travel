<template>
    <div class="banner">
        <img src="//img1.qunarzz.com/sight/p0/1805/2d/2dbd8192da29dfcda3.img.jpg_600x330_2b602322.jpg" class="banner-img" alt="">
        <div class="banner-info">
            <div class="banner-icon-box">
                <span class="iconfont back-icon">&#xe755;</span>
                <em>32</em>
            </div>
            <p class="banner-title">木兰天池(AAAAA景区)</p>            
        </div>
    </div> 
</template>

<script>
export default {
    name:'detailBanner'
}
</script>

<style lang="stylus" scoped>
    .banner  
        &:after
            content: " ";
            display: block;
            position: absolute;
            top 85%
            bottom: 0;
            left: 0;
            width: 100%;
            background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8));      
        overflow hidden
        position relative
        height 0
        padding-bottom 55%
        .banner-img            
            width 100%
        .banner-info          
            position absolute
            top 3rem 
            left .2rem
            color #fff
            font-size .28rem        
          
            .banner-icon-box
                width 1.2rem
                height .4rem
                line-height .4rem                
                text-align center                
                border-radius .6rem
                background-color rgba(0,0,0,.6)
                .back-icon
                    font-size .28rem
            .banner-title
                margin-top .1rem
                font-size .36rem
</style>

