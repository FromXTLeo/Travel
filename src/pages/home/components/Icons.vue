<template>
  <div class="icon-box">  
      <swiper :options="swiperOption">
        <!-- slides -->    
        <swiper-slide v-for="items in pages" :key="items.key">
            <div class="icon" v-for="item in items" :key="item.id">
                <div class="icon-img-box">
                    <img class="icon-img" :src="item.imgUrl" alt="">
                </div>
                <span class="icon-text">{{item.desc}}</span>
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
        if(this.iconList)
        {
            const pages=[]        
            this.iconList.forEach((item,index)=>{
                const page =Math.floor(index/8)
                if(!pages[page])
                {
                    pages[page]=[]
                }
                pages[page].push(item)
           
            })
            return pages
        }
      }
    },
    data(){
      return{
          swiperOption:{              
              loop:false
          }          
      }
    },
    props:{
       iconList:'' 
    }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    @import '~styles/mixins.styl';
    .icon-box
        overflow hidden
        padding-bottom 52%
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

