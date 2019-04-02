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
        <form class="px-6 py-6">
            <ci-input name="title" :label="$t('title_label')" :placeholder="$t('title_label')"/>
            <ci-input name="url" type="url" :label="$t('url_label')" :placeholder="$t('url_label')"/>
            <ci-input name="url" :label="$t('username_label')" :placeholder="$t('username_label')"/>
            <ci-input name="password" type="password" :label="$t('password_label')" :placeholder="$t('password_label')"/>
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
export default {
    
}
</script>
