<template>
  <div>
        <div class="title">热销推荐</div>
        <div>
            <ul>
                <li class="border-bottom item" v-for="item in weekendList" :key="item.key">
                    <img class="item-img" :src="item.itemsrc" alt="">
                    <div class="item-content">
                        <p class="item-content-title">{{item.itemtitle}}</p>
                        <p class="item-content-text">{{item.itemtext}}</p>
                        <button class="item-content-button">查看详情</button>
                    </div>
                </li>
            </ul>            
        </div>
  </div>
</template>
<script>
export default {
    data(){
        return{       
      }
  },
    props:{
        weekendList:""
    }
}
</script>
<style lang="stylus" scoped>
 @import '~styles/mixins.styl';
    .title
        background-color #eee
        text-indent 15px
        line-height .8rem        
    .item
        display flex
        height 1.9rem
        overflow hidden
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-content
            flex 1
            padding .1rem
            min-width 0
            .item-content-title
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-content-text
                line-height .4rem
                color #cccccc
                ellipsis()
            .item-content-button   
                line-height .44rem
                margin-top .12rem
                background-color #ff9300
                padding 0 .2rem
                border-radius .06rem
                color #fff
</style>

