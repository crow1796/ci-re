import Authenticator from '@app/popup/utils/auth'

const state = {
    token: localStorage.getItem(`${window.storagePrefix}token`),
    secret: localStorage.getItem(`${window.storagePrefix}secret`)
}
const mutations = {
    LOGIN_SUCCESS(state, {token, secret}) {
        localStorage.setItem(`${window.storagePrefix}token`, token)
        localStorage.setItem(`${window.storagePrefix}secret`, secret)
    },
    LOGOUT_SUCCESS(state) {
        localStorage.removeItem(`${window.storagePrefix}token`)
        localStorage.removeItem(`${window.storagePrefix}secret`)
        state.token = null
        state.secret = null
    }
}
const getters = {
    isLoggedIn(state) {
        return localStorage.getItem(`${window.storagePrefix}token`) && localStorage.getItem(`${window.storagePrefix}secret`)
    },
    token(state) {
        return state.token
    },
    secret(state){
        return state.secret
    }
}
const actions = {
    login(_, userdata) {
        const auth = new Authenticator()
        return auth.login(userdata)
    },
    preLogin(_, userdata){
        const auth = new Authenticator()
        return auth.preLogin(userdata)
    },
    logout(context) {
        context.commit('LOGOUT_SUCCESS')
    },
    checkUser() {
        return window.axios.post('/auth/me')
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}