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
        <!-- <empty-list-placeholder :heading="$t('no_sites')" 
            :subheading="$t('click_to_add')"
            icon="fas fa-globe-europe"
            v-if="!sites.length"
            @add-clicked="$router.replace('/sites/create')"/> -->
        <div class="text-center py-3 shadow cursor-pointer hover:bg-grey-lighter" 
            @click="$router.replace('/sites/create')">
            <button class="rounded-full text-center bg-white text-lg w-6 h-6 outline-none focus:outline-none hover:bg-grey-lighter text-primary shadow">
                +
            </button>
            <span class="ml-2 text-grey-dark">
                {{ $t('add_site') }}
            </span>
        </div>
        <div class="p-3 overflow-auto card-list">
            <div class="font-bold mb-2 text-grey-dark">
                {{ $t('suggested_accounts') }}
            </div>
            <div class="rounded shadow bg-white text-grey-dark mb-2">
                <div class="flex">
                    <div class="p-6">
                        LOGO
                    </div>
                    <div class="flex-grow py-4">
                        <div class="font-bold">
                            Name
                        </div>
                        <div class="link">
                            Link
                        </div>
                    </div>
                    <div class="flex">
                        <div class="p-6 cursor-pointer">
                            <i class="fas fa-ellipsis-v"></i>
                        </div>
                    </div>
                    <div class="flex">
                        <ci-button text="USE"/>
                    </div>
                </div>
            </div>
            <div class="border border-b border-grey-lighter mb-2 mt-4"></div>
            <div class="font-bold mb-2 text-grey-dark">
                {{ $t('all_accounts') }}
            </div>
            <div class="rounded shadow bg-white text-grey-dark mb-2">
                <div class="flex">
                    <div class="p-6">
                        LOGO
                    </div>
                    <div class="flex-grow py-4">
                        <div class="font-bold">
                            Name
                        </div>
                        <div class="link">
                            Link
                        </div>
                    </div>
                    <div class="flex">
                        <div class="p-6 cursor-pointer">
                            <i class="fas fa-ellipsis-v"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rounded shadow bg-white text-grey-dark mb-2">
                <div class="flex">
                    <div class="p-6">
                        LOGO
                    </div>
                    <div class="flex-grow py-4">
                        <div class="font-bold">
                            Name
                        </div>
                        <div class="link">
                            Link
                        </div>
                    </div>
                    <div class="flex">
                        <div class="p-6 cursor-pointer">
                            <i class="fas fa-ellipsis-v"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rounded shadow bg-white text-grey-dark mb-2">
                <div class="flex">
                    <div class="p-6">
                        LOGO
                    </div>
                    <div class="flex-grow py-4">
                        <div class="font-bold">
                            Name
                        </div>
                        <div class="link">
                            Link
                        </div>
                    </div>
                    <div class="flex">
                        <div class="p-6 cursor-pointer">
                            <i class="fas fa-ellipsis-v"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rounded shadow bg-white text-grey-dark mb-2">
                <div class="flex">
                    <div class="p-6">
                        LOGO
                    </div>
                    <div class="flex-grow py-4">
                        <div class="font-bold">
                            Name
                        </div>
                        <div class="link">
                            Link
                        </div>
                    </div>
                    <div class="flex">
                        <div class="p-6 cursor-pointer">
                            <i class="fas fa-ellipsis-v"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rounded shadow bg-white text-grey-dark mb-2">
                <div class="flex">
                    <div class="p-6">
                        LOGO
                    </div>
                    <div class="flex-grow py-4">
                        <div class="font-bold">
                            Name
                        </div>
                        <div class="link">
                            Link
                        </div>
                    </div>
                    <div class="flex">
                        <div class="p-6 cursor-pointer">
                            <i class="fas fa-ellipsis-v"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rounded shadow bg-white text-grey-dark mb-2">
                <div class="flex">
                    <div class="p-6">
                        LOGO
                    </div>
                    <div class="flex-grow py-4">
                        <div class="font-bold">
                            Name
                        </div>
                        <div class="link">
                            Link
                        </div>
                    </div>
                    <div class="flex">
                        <div class="p-6 cursor-pointer">
                            <i class="fas fa-ellipsis-v"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rounded shadow bg-white text-grey-dark mb-2">
                <div class="flex">
                    <div class="p-6">
                        LOGO
                    </div>
                    <div class="flex-grow py-4">
                        <div class="font-bold">
                            Name
                        </div>
                        <div class="link">
                            Link
                        </div>
                    </div>
                    <div class="flex">
                        <div class="p-6 cursor-pointer">
                            <i class="fas fa-ellipsis-v"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div class="rounded shadow bg-white text-grey-dark mb-2">
                <div class="flex">
                    <div class="p-6">
                        LOGO
                    </div>
                    <div class="flex-grow py-4">
                        <div class="font-bold">
                            Name
                        </div>
                        <div class="link">
                            Link
                        </div>
                    </div>
                    <div class="flex">
                        <div class="p-6 cursor-pointer">
                            <i class="fas fa-ellipsis-v"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EmptyListPlaceholder from './EmptyListPlaceholder.vue'

export default {
    components: {
        EmptyListPlaceholder
    },
    computed: {
        ...mapGetters({
            sites: 'sites/sites'
        })
    }
}
</script>

