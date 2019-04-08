import store from '@app/popup/store'

export default {
    checkIfUserIsNotLoggedIn(to, from, next) {
        if(!store.getters['auth/isLoggedIn']) return next('/auth')
        return next()
    },
    checkIfUserIsLoggedIn(to, from, next){
        if (store.getters['auth/isLoggedIn']) return next('/sites')
        return next()
    }
}