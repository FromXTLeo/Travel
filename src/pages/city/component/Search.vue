<template>
    <div class="search">
        <input type="text" placeholder="请输入城市名" class="search-input">
    </div>
</template>

<script>
export default {
    name:'CitySearch'
}
</script>

<style lang="stylus" scoped>
//style 里面引用样式文件格式如下
   @import '~styles/varibles.styl'
    .search                            
        background-color $bgcolor 
        height .75rem
        padding 0 .2rem
        .search-input
              width 100%
              border none 
              border-radius .06rem
              text-align center
              box-sizing border-box
              padding 0 .1rem
              height .62rem
              line-height .62rem
</style>
