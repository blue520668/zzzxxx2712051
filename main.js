import Vue from 'vue';  //vue库文件
import App from "./App.vue";  //App组件,充当容器作用
import VueRouter from 'vue-router';  //导入路由插件
import VueResource from 'vue-resource';  //导入vue-resource
import RouterConfig from './router.config.js'; //路由配置文件

Vue.use(VueRouter); //使用路由
Vue.use(VueResource); //使用ajax/resource

var router = new VueRouter();

//路由的配置文件
router.map( RouterConfig );
//重定向路由
router.redirect({
    '/' : '/home'
});

//启动路由
router.start( App, '#app' );




