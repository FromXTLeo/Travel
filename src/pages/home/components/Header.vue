<template>    
    <div class="header">
        <div class="header-left">
            <span class="iconfont back-icon">&#xe624;</span>
        </div>
        <div class="header-content">
            <span class="iconfont search-icon">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                城市
                <span class="iconfont arrow-icon">&#xe600;</span>
            </div>
        </router-link>
    </div>    
</template>
<script>
    export default {
        name:"HomeHeader"
    }
</script>
<style lang="stylus" scoped>
//style 里面引用样式文件格式如下
   @import '~styles/varibles.styl'
    .header
        display:flex;
        line-height :$headerheight
        background :$bgcolor;
        color :#fff;
        .header-left
            width :.64rem;
            float :left;
            .back-icon
                display:block;
                text-align:center;
        .header-content
            flex :1
            background :#fff;
            color :#ccc;
            height :.64rem;
            line-height :.64rem;
            margin-top:.12rem;
            margin-left:.1rem;
            border-radius:.1rem;
            .search-icon
                margin-left :.2rem;
        .header-right
            width:1.24rem;
            float:right;
            text-align :center;
            color:#fff;
            .arrow-icon
                margin-left :-.04rem;                
                font-size:.24rem;

</style>

