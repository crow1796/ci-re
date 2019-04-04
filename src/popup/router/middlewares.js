import store from '@app/popup/store'

export default {
    userAuth(to, from, next){
        if(!store.getters.isLoggedIn) return next('/auth')
        return next()
    },
    userNotAuth(to, from, next){
        if (store.getters.isLoggedIn) return next('/')
        return next()
    }
}