<i18n>
{
    "en-US": {
        "search": "Search...",
        "no_sites": "No Sites.",
        "click_to_add": "Click + to add new sites.",
        "suggested_accounts": "Suggested Accounts",
        "add_site": "Add a New Site",
        "all_accounts": "All Accounts"
    },
    "es-ES": {
        "search": "Buscar...",
        "no_sites": "No hay sitios.",
        "click_to_add": "Haga clic en + para agregar nuevos sitios.",
        "suggested_accounts": "Cuentas sugeridas",
        "add_site": "Añadir un nuevo sitio",
        "all_accounts": "Todas las cuentas"
    }
}
</i18n>

<template>
    <div id="sites">
        <div class="home-search border-b border-grey-lighter">
            <input type="text" class="p-4 w-full outline-none" :placeholder="$t('search')">
        </div>
        <empty-list-placeholder :heading="$t('no_sites')" 
            :subheading="$t('click_to_add')"
            icon="fas fa-globe-europe"
            v-if="!sites.length"
            @add-clicked="$router.replace('/sites/create')"/>
        <div class="text-center py-3 shadow cursor-pointer hover:bg-grey-lighter" 
            @click="$router.replace('/sites/create')"
            v-if="sites.length">
            <button class="rounded-full text-center bg-white text-lg w-6 h-6 outline-none focus:outline-none hover:bg-grey-lighter text-primary shadow">
                +
            </button>
            <span class="ml-2 text-grey-dark">
                {{ $t('add_site') }}
            </span>
        </div>
        <div class="p-3 overflow-auto card-list" v-if="sites.length">
            <!-- <div class="font-bold mb-2 text-grey-dark">
                {{ $t('suggested_accounts') }}
            </div>
            <account-list-item :account="{}" usable/> -->
            <div class="border border-b border-grey-lighter mb-2 mt-4"></div>
            <div class="font-bold mb-2 text-grey-dark">
                {{ $t('all_accounts') }}
            </div>
            <account-list-item v-for="(site, index) in sites" 
                :key="index"
                :account="site"/>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AccountListItem from '@app/popup/components/App/AccountListItem.vue'
import EmptyListPlaceholder from '@app/popup/components/EmptyListPlaceholder.vue'

export default {
    components: {
        AccountListItem,
        EmptyListPlaceholder
    },
    created(){
        this.$store.commit('app/IS_FULL_LOADING', true)
    },
    async mounted(){
        if(this.isOnline && this.cacheNotExpired){
            let { data } = await this.$store.dispatch('sites/getVault')
            this.setLifetime()
            this.$offlineStorage.set('sites', data.result)
        }
        this.$store.commit('app/IS_FULL_LOADING', false)
        this.$store.commit('sites/SITES', this.$offlineStorage.get('sites') || [])
    },
    methods: {
        setLifetime(){
            let curTS = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ? window.performance.now() + window.performance.timing.navigationStart : Date.now()

            this.$offlineStorage.set('cache_lifetime', { timestamp: curTS, lifetime: 1800 })
        }
    },
    computed: {
        ...mapGetters({
            sites: 'sites/sites'
        }),
        cacheNotExpired(){
            let curTS = window.performance && window.performance.now && window.performance.timing && window.performance.timing.navigationStart ?  window.performance.now() + window.performance.timing.navigationStart :  Date.now()

            let lifetime = this.$offlineStorage.get('cache_lifetime')

            if(!lifetime) return true
            
            let time = (curTS / lifetime.timestamp) / 1000

            return lifetime.lifetime < time
        }
    }
}
</script>

