import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
	routes
})

router.beforeEach(async (to, from, next) => {
	if (!to.meta.requireAuth) return next()
	// if (!localStorage.getItem('jwt-auth-token')) return router.replace(`/login`)
	// store.dispatch('toggleFullLoader', true)
	// let response = await store.dispatch('checkUser')
	// store.dispatch('toggleFullLoader', false)
	// if (!response.data.status) {
	// 	await store.dispatch('logout')
	// 	return router.replace(`/login/?message=${response.data.message}`)
	// }
	// store.commit('LOGIN_SUCCESS', response)
	return next()
})

export default router