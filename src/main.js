/*入口文件*/

/*导入Vue包*/
import Vue from 'vue'
// import Vue from 'vue/dist/vue.js'

/*vue-router 路由 1*/
import VueRouter from 'vue-router'
/*手动安装VueRouter 2*/
Vue.use(VueRouter)
/*创建路由对象 3*/
import router from './router.js'

/*测试暴露接口与组件*/
import test, {obj as o} from './test.vue'
console.log(o)

/*导入模板对象*/
import app from './App.vue'


let vm = new Vue({
	el: '#app',
	data: {
		msg: 'boke'
	},
	render: cEl => cEl(app),
	router
})
