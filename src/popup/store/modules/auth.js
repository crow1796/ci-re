import Authenticator from '@app/popup/utils/auth'

const state = {
    token: localStorage.getItem(`cib_token`),
    secret: localStorage.getItem(`cib_secret`)
}
const mutations = {
    LOGIN_SUCCESS(state, {token, secret}) {
        state.token = token
        state.secret = secret
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
        return state.token && state.secret
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
        return context.commit('LOGOUT_SUCCESS')
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