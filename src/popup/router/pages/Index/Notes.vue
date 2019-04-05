<i18n>
{
    "en-US": {
        "search": "Search...",
        "no_notes": "No Notes.",
        "click_to_add": "Click + to add new notes."
    },
    "es-ES": {
        "search": "Buscar...",
        "no_notes": "No hay notas.",
        "click_to_add": "Haga clic en + para agregar nuevas notas."
    }
}
</i18n>

<template>
    <div id="notes">
        <div class="home-search">
            <input type="text" class="p-4 w-full outline-none" :placeholder="$t('search')">
        </div>
        <empty-list-placeholder :heading="$t('no_notes')" 
        :subheading="$t('click_to_add')"
        icon="fas fa-file"
        @add-clicked="$router.replace('/notes/create')"
        v-if="!notes.length"/>
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
            notes: 'notes/notes'
        })
    }
}
</script>
