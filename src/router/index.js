import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
			path: '/', 
			redirect: to => { return '/index'},
    },
    {
			path: '/articles',
			name: 'article',
			component: resolve => require(['@/components/article'], resolve),
			meta: {auth: false}
		},
		{
			path: '/index',
			name: 'index',
			component: resolve => require(['@/layout/index'], resolve),
			meta: {auth: false}
		},
  ]
})
