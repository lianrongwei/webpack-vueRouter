/*路由分离*/

/*导入路由*/
import VueRouter from 'vue-router'

/*路由组件*/
import account from './main/Account.vue'
import goodsList from './main/GoodsList.vue'

/*子路由组件*/
import login from './main/subcom/login.vue'
import register from './main/subcom/register.vue'

/*创建路由对象*/
let router  = new VueRouter({
	routes: [
		{
			path: '/account',
			component: account,
			children: [
				{path: 'login',  component: login},
				{path: 'register',  component: register}
			]
		},
		{path: '/goodslist', component: goodsList}
	],
	linkActiveClass: 'myLinkClass'
})

//暴露路由对象
export default router
