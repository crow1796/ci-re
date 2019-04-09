import Vue from 'vue'

const state = {
    sites: []
}

const mutations = {
    SITES(state, sites){
        state.sites = sites
    }
}

const getters = {
    sites: (context) => context.sites
}

const actions = {
    getVault(){
        return axios.get('/item/all')
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
