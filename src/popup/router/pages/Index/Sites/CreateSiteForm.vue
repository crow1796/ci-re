<i18n>
{
    "en-US": {
        "title_label": "Title",
        "url_label": "URL",
        "username_label": "Username",
        "password_label": "Password",
        "notes_label": "Notes",
        "save_btn": "Save",
        "cancel_btn": "Cancel"
    },
    "es-ES": {
        "title_label": "Titulo",
        "url_label": "URL",
        "username_label": "Usuario",
        "password_label": "Contraseña",
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
            <ci-input name="url" 
                type="url" 
                :label="$t('url_label')" 
                :placeholder="$t('url_label')"
                v-model="url"/>
            <ci-input name="username" 
                :label="$t('username_label')" 
                :placeholder="$t('username_label')"
                v-model="username"/>
            <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
                {{ $t('password_label') }}
            </label>
            <password id="password"
                name="password"
                v-model="password"
                :badge="false"
                :toggle="true"
                default-class="appearance-none border w-full py-4 px-3 text-grey-darker leading-tight outline-none focus:border-grey text-md"
                :placeholder="$t('password_label')"
            />
            <ci-textarea name="notes" 
                :label="$t('notes_label')" 
                :placeholder="$t('notes_label')"/>
            <div class="text-right">
                <ci-button :text="$t('cancel_btn')" 
                class="mr-4"
                @click="$route.meta.embedded ? $router.replace('/embeds/sites') : $router.replace('/sites')"/>
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
