<template>
  <div class="icon-box">
      <!-- <div class="icon" v-for="item in iconList" :key="item.id">
            <div class="icon-img-box">
                <img class="icon-img" :src="item.imgsrc" alt="">
            </div>
            <span class="icon-text">{{item.imgtext}}</span>
      </div>    -->
      <swiper :options="swiperOption">
        <!-- slides -->    
        <swiper-slide v-for="items in pages" :key="items.key">
            <div class="icon" v-for="item in items" :key="item.id">
                <div class="icon-img-box">
                    <img class="icon-img" :src="item.imgsrc" alt="">
                </div>
                <span class="icon-text">{{item.imgtext}}</span>
            </div>   
        </swiper-slide>        
      </swiper>  
  </div>
</template>
<script>

export default {
  name:'HomeIcons',
  computed:{
      pages(){
        const pages=[]        
        this.iconList.forEach((item,index)=>{
            const page =Math.floor(index/8)
            if(!pages[page])
            {
                pages[page]=[]
            }
            pages[page].push(item)
            console.log(page)
        })
        return pages
      }
  },
  data(){
      return{
          swiperOption:{              
              loop:false
          },
          iconList:[
              {
                  id:1,
                  imgsrc:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                  imgtext:'景点门票'
              },
              {
                  id:2,
                  imgsrc:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                  imgtext:'必游榜单'
              },
              {
                  id:3,
                  imgsrc:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                  imgtext:'游乐场'
              },
              {
                  id:4,
                  imgsrc:'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
                  imgtext:'踏青赏花'
              },
              {
                  id:5,
                  imgsrc:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                  imgtext:'动植物园'
              },
              {
                  id:6,
                  imgsrc:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                  imgtext:'一日游'
              },
              {
                  id:7,
                  imgsrc:'http://img1.qunarzz.com/piao/fusion/1803/dd/cce1231836f10a02.png',
                  imgtext:'周边游'
              },
              {
                  id:8,
                  imgsrc:'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
                  imgtext:'自然风光'
              },
              {
                  id:9,
                  imgsrc:'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
                  imgtext:'演出'
              },
              ]
      }
  }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    @import '~styles/mixins.styl';
    .icon-box
        overflow hidden
        padding-bottom 50%
        height 0
        // background-color $bgcolor
        border-top 1px solid #fefefe
        .swiper-container            
            height 4rem
        .icon
            position relative
            overflow hidden
            width 25%
            height 0
            padding-bottom 25%
            background-color #fff
            float left
            box-sizing border-box                        
            .icon-img-box
                position absolute
                top 0
                left 0
                right 0
                bottom .44rem
                text-align center
                .icon-img                
                    height 100%
                    margin 0 auto
            .icon-text
                position absolute
                line-height  .44rem
                height .44rem
                bottom 0
                left 0
                right 0
                color $darkcolor
                text-align center 
                ellipsis()
                
</style>

