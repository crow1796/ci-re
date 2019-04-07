<i18n>
{
    "en-US": {
        "no_sites": "No Sites.",
        "click_to_add": "Click + to add new sites."
    },
    "es-ES": {
        "no_sites": "No hay sitios.",
        "click_to_add": "Haga clic en + para agregar nuevas sitios."
    }
}
</i18n>

<template>
    <div>
        <div class="p-3 card-list">
            <empty-list-placeholder :heading="$t('no_sites')" 
            :subheading="$t('click_to_add')"
            icon="fas fa-globe-europe"
            v-if="!sites.length"
            @add-clicked="$router.replace('/embeds/sites/create?mode=current_site')"/>

            <account-list-item v-for="(site, index) in sites" 
                :key="index"
                :account="site" 
                usable/>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import EmptyListPlaceholder from '@app/popup/components/EmptyListPlaceholder.vue'
import AccountListItem from '@app/popup/components/App/AccountListItem.vue'

export default {
    components: {
        AccountListItem,
        EmptyListPlaceholder
    },
    computed: {
        ...mapGetters({
            sites: 'sites/sites'
        })
    }
}
</script>

