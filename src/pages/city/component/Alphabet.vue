<template>
    <ul class="alphabet" >
        <li class="item"             
            v-for="(item,key) in alphabetData"
            @click="handleClick" 
            @touchstart.prevent="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
        >
        {{key}}
        </li>              
    </ul>
</template>

<script>
import bus from './bus.js'
export default {
    name:'CityAlphabet',
    data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
    },
    computed: {
        letters () {
        const letters = []
        for (let i in this.alphabetData) {
            letters.push(i)
        }
        return letters
        }
    },
    props:{
        alphabetData:''
    },
    methods:{
        handleClick(e){            
            bus.$emit('handleClick',e.target.innerText)
        },
        handleTouchStart () {
            this.touchStatus = true
        },  
        handleTouchMove (e) {                     
            if (this.touchStatus) {
                if (this.timer) {
                clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                const touchY = e.touches[0].clientY - 79
                const index = Math.floor((touchY - this.startY) / 20)                
                if (index >= 0 && index < this.letters.length) {                    
                    bus.$emit('handleClick', this.letters[index])
                }
                }, 16)
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        }
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
