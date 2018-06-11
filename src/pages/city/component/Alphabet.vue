<template>
    <ul class="alphabet">
        <li class="item" v-for="(item,key) in alphabetData">{{key}}</li>              
    </ul>
</template>

<script>
export default {
    name:'CityAlphabet',
    props:{
        alphabetData:''
    }
}
</script>

<style lang="stylus" scoped>
//style 里面引用样式文件格式如下
   @import '~styles/varibles.styl'
    .alphabet
        display flex
        flex-direction column
        justify-content center
        position absolute
        right 0
        bottom 0
        top 1.62rem
        .item
            padding .05rem .1rem 
            font-size .24rem
            color $bgcolor
                    
                
</style>
