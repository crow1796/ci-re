<i18n>
{
    "en-US": {
        "sites": "Sites",
        "notes": "Notes"
    },
    "es-ES": {
        "sites": "Sitios",
        "notes": "Notas"
    }
}
</i18n>

<template>
    <div id="list" class="bg-grey-lightest">
        <main-appbar/>
        <router-view/>
        <div class="tabs" v-if="$route.name == 'sites' || $route.name == 'notes'">
            <ul class="list-reset flex">
                <li class="flex-1">
                    <router-link class="text-center block text-grey-darker py-4 px-4 outline-none no-underline border-none" 
                    to="/sites" 
                    active-class="bg-primary text-white hover:text-white hover:bg-primary">
                        {{ $t('sites') }}
                    </router-link>
                </li>
                <li class="flex-1">
                    <router-link class="text-center block text-grey-darker py-4 px-4 outline-none no-underline border-none" 
                    to="/notes"
                    active-class="bg-primary text-white hover:text-white hover:bg-primary">
                        {{ $t('notes') }}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import MainAppbar from '@app/popup/components/App/MainAppbar.vue'

export default {
    components: {
        MainAppbar
    },
    created(){
        this.$router.replace('/sites')
    },
    data () {
        return {}
    }
}
</script>