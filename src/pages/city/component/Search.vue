<template>
    <div>
        <div class="search">
            <input type="text" v-model="keyword" placeholder="请输入城市名" class="search-input">
        </div>  
        <div class="search-list" ref="List" v-show="keyword">
            <ul>
                <li class="item border-bottom" @click="handleClickCity(item.name)" :key="item.id" v-for="item in searchList">
                    {{item.name}}
                </li>
                <li class="notdata" v-show="notSearchData">
                    没有找到对应数据！
                </li>
            </ul>
        </div>              
    </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
    name:'CitySearch',
    data(){
        return{
            keyword:'',                        
            searchList:[],
            timer: null
        }
    },
    props:{
        cities:''
    },
    mounted(){        
       this.scroll = new BScroll(this.$refs.List)   
    },
    methods:{
        handleClickCity(city){
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    computed:{
        notSearchData(){
            return !this.searchList.length
        }
    },
    watch:{
        keyword(){  
            if (this.timer) {
                clearTimeout(this.timer)
            }        
            if(!this.keyword)
            {
                this.searchList=[]
                return
            }
            const result=[]
            this.timer=setTimeout(()=>{
                for(let i in this.cities)
                {
                    this.cities[i].forEach((value) => {
                        if(value.name.indexOf(this.keyword)>-1||value.spell.indexOf(this.keyword)>-1)
                        {
                            result.push(value)
                        }
                    });
                }
                this.searchList=result
            }) 
        }
    }

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
    .search-list
        z-index 1
        overflow hidden
        position absolute
        top 1.62rem
        right 0
        left 0
        bottom 0
        background #fff
        .item
            padding .1rem .2rem 
        .notdata
           margin 40% auto 0
           text-align center
        
</style>