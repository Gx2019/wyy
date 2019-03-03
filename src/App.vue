<template>
  <div id="app-box">
    <Header></Header>

    <main>
       <router-view></router-view>
    </main>
   <TabBar>
    
   </TabBar>
   
   


  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld'   两种组件的导入方式
  // import HelloWorld from '@/components/HelloWorld'//@默认指向src目录
import Header from 'components/layout/Header'
import TabBar from 'components/layout/TabBar'
import Home from 'pages/Home'

    export default{//导出 
      name: 'App',
      data(){
        return{
          msg:  ' hello '
        }
      },
      methods:{
        fn(){
          console.log('hello')
        }
      },
      components:{
        
       Home,Header,TabBar
      }
    }

</script>

<style lang="stylus" scoped>
    @import '~styles/_base_styl'
  #app-box 
    height 100%
    display flex 
    flex-direction column
    // overflow hidden
    main 
      flex 1
</style>
