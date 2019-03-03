<template>
    <div class="app-header">
  <!-- <div> <img  class="header-img" src="@/assets/images/wyy2.jpg"> -->
       网易云音乐
       <!-- </div> -->

        <div class="topfr"><span class="f-bd f-bd-full topbton">下载APP</span></div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style lang="stylus" scoped>
 @import '~styles/_base_styl'
  .app-header
    position relative
    background $bg-color
    color white
    text-align center 
    height .505rem 
    line-height .505rem 
    font-size .20rem 
    display flex
    -ms-flex-pack justify
    justify-content space-between
    -ms-flex-align center
    align-items center
    padding 0 0.1rem
   .app-header img
        width .505rem
        height .515rem
        line-height .505rem
   .m-hometop 
        position relative
        display inline-block
        height 30px
        line-height 30px
        padding 0 10px
        color #fff
        font-size 15px
 .f-bd 
    position relative
.topbton
    position relative
    display inline-block
    height 30px
    line-height 30px
    padding 0 10px
    color #fff
    font-size 15px
.f-bd-full:after 
    border-width 1px
.f-bd:after 
    position absolute
    z-index 2
    content ""
    top 0
    left 0
    pointer-events none
    box-sizing border-box
    width 100%
    height 100%
    transform-origin top left
    border 0 solid rgba(0,0,0,.1)


    
</style>

