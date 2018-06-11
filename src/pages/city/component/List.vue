<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title">当前城市</div>
                <div class="area-container">
                    <button class="area-button">北京</button>               
                </div>
            </div>
            <div class="area">
                <div class="title">热门城市</div>
                <div class="area-container" >
                    <button class="area-button" v-for="item in listData.hotCities" >{{item.name}}</button>                    
                </div>
            </div>
            <div class="area" v-for="(item,key) in listData.cities">
                <div class="title">{{key}}</div>           
                <p class="area-text border-bottom" v-for="items in item">{{items.name}}</p>           
                                          
            </div>            
       </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'CityList',
    props:{
        listData:''
    },
    mounted(){
       this.scroll = new BScroll(this.$refs.wrapper)
       console.log(this.listData)
    }
}
</script>

<style lang="stylus" scoped>
//style 里面引用样式文件格式如下
   @import '~styles/varibles.styl'
     .list                                    
        overflow hidden
        position absolute
        top 1.62rem
        left 0
        bottom 0
        right 0
        .area
            .title
                background #eee
                line-height .6rem
                padding 0 .2rem 
            .area-container
                padding .1rem .6rem .1rem .2rem
                .area-button
                    background #ffffff
                    border .01rem solid #cccccc
                    padding .1rem .6rem
                    border-radius .06rem
                    margin .1rem .1rem .1rem 0
            .area-text
                line-height .62rem
                padding 0 0 0 .2rem        
</style>
