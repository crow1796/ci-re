<i18n>
{
    "en-US": {
        "title_label": "Title",
        "notes_label": "Notes",
        "save_btn": "Save",
        "cancel_btn": "Cancel"
    },
    "es-ES": {
        "title_label": "Titulo",
        "notes_label": "Notas",
        "save_btn": "Salvar",
        "cancel_btn": "Cancelar"
    }
}
</i18n>

<template>
    <div id="create-site-form">
        <form class="px-6 py-6"
            @submit.prevent="">
            <ci-input name="title" 
                :label="$t('title_label')" 
                :placeholder="$t('title_label')"
                :value="title"/>
            <ci-textarea name="notes" 
                :label="$t('notes_label')" 
                :placeholder="$t('notes_label')"
                rows="10"/>
            <div class="text-right">
                <ci-button :text="$t('cancel_btn')" 
                class="mr-4"
                @click="$router.replace('/sites')"/>
                <ci-button appearance="primary" 
                :text="$t('save_btn')"/>
            </div>
        </form>
    </div>
</template>

<script>
import Password from 'vue-password-strength-meter'

export default {
    components: {
        Password
    },
    created(){
        if(this.$route.query.mode == 'current_site'){
            chrome.tabs.query({
                active: true,
                currentWindow: true
            }, (tabs) => {
                this.title = tabs[0].title
                this.url = tabs[0].url
            })
        }
    },
    data(){
        return {
            title: null,
            url: null,
            username: null,
            password: null
        }
    }
}
</script>
