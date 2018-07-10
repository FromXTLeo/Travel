<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title">当前城市</div>
                <div class="area-container">
                    <button class="area-button">{{this.city}}</button>               
                </div>
            </div>
            <div class="area">
                <div class="title">热门城市</div>
                <div class="area-container" >
                    <button class="area-button" @click="handleClickCity(item.name)" v-for="item in listData.hotCities" :key="item.id" >{{item.name}}</button>                    
                </div>
            </div>
            <div class="area" v-for="(item,key) in listData.cities" :key="item.id">
                <div class="title" :ref="key">{{key}}</div>           
                <p class="area-text border-bottom" @click="handleClickCity(items.name)" :key="items.id" v-for="items in item">{{items.name}}</p>           
                                          
            </div>            
       </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import bus from './bus.js'
import {mapState,mapMutations} from 'vuex'
export default {
    name:'CityList',
    props:{
        listData:''
    },
    computed:{
        ...mapState(['city'])
    },
    mounted(){
        const _this =this
        this.scroll = new BScroll(_this.$refs.wrapper)       
        bus.$on('handleClick',(eee)=>{                        
           this.scroll.scrollToElement(_this.$refs[eee][0])
        })
    },
    methods:{
        handleClickCity(city){
            this.changeCity(city)           
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
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
