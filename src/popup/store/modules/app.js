const state = {
    isFullLoading: false
}

const mutations = {
    IS_FULL_LOADING(state, loading){
        state.isFullLoading = loading
    }
}

const getters = {
    isFullLoading(state){
        return state.isFullLoading
    }
}

const actions = {
    changeLocale(_, locale){
        console.log('setLocale')
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
