import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false

//引入样式重置文件
import 'styles/_reset.styl'
//引入rem.js
import 'untils/rem.js'

import router from './router'
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')