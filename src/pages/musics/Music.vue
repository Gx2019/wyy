<template>
    <div class="app-music">
     <div class="wrapper">
   <!-- <div class="content"> -->
    <MusicList>

    </MusicList>
</div>
       
        
    </div>
     <!-- </div> -->
</template>
<script>



import MusicList from 'pages/musics/MusicList'
import { Indicator }from 'mint-ui'
import BScroll from "better-scroll"

export default {  
     /* data(){
        return {
            hotShowing = await http({
                method:'get',
                url:'baidu.com'
            })
        }
    }, */  
     mounted() {
       new BScroll(".remd_newsg");
    },
    components:{
        MusicList
    }
   
}
</script>

<style lang="stylus" scoped>
@import '~styles/_base_styl'
@import '~styles/_border.styl'

.app-music
    flex 1
.wrapper
   height 100%
</stule>
