<template>
    <div class="header">
        <router-link to="/">
        <div class="header-left">
            <span class="iconfont back-icon">&#xe624;</span>
        </div>       
        </router-link> 
        城市选择
    </div>
</template>

<script>
export default {
    name:'CityHeader'
}
</script>

<style lang="stylus" scoped>
//style 里面引用样式文件格式如下
   @import '~styles/varibles.styl'
    .header
        position relative
        line-height $headerheight;
        height $headerheight;
        text-align center        
        background :$bgcolor;
        color :#fff;
        .header-left
            position absolute
            width :.64rem; 
            color :#fff; 
                    
                
</style>
