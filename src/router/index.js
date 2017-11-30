import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
			path: '/', 
			redirect: to => { return 'layout'},
    },
    // {
		// 	path: '/articles',
		// 	name: 'article',
		// 	component: resolve => require(['@/pages/article'], resolve),
		// 	meta: {auth: false}
		// },
  ]
})
