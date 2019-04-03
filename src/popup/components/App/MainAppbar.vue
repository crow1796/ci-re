<i18n>
{
    "en-US": {
        "create_from_url": "Create site from this URL",
        "create_note": "Create new safe note",
        "generate_password": "Generate secure password",
        "report": "Report Incident",
        "complete_form": "Complete form"
    },
    "es-ES": {
        "create_from_url": "Crear sitio a partir de esta URL",
        "create_note": "Crear nueva nota segura",
        "generate_password": "Generar contraseña segura",
        "report": "Reportar Incidencia",
        "complete_form": "Completar formulario"
    }
}
</i18n>

<template>
    <div class="flex items-center justify-between bg-primary">
        <div class="menu flex justify-between w-full">
            <div>
                <span class="text-white text-xl align-middle cursor-pointer p-4 inline-block"
                @click="show">
                    <i class="fas fa-th"></i>
                </span>
                <img src="/images/ciberprotector-logo-blanco.png" alt="CiberProtector" class="w-48 align-middle">
            </div>
        </div>
        <transition name="slide"
            enter-active-class="slideInDown"
            leave-active-class="slideOutUp">
            <div class="fixed w-full h-full bg-white z-10 pin-l pin-t overflow-auto h-full"
                v-if="isActive">
                <div class="appbar-head">
                    <div class="flex justify-between">
                        <span class="cursor-pointer text-grey-darker text-xl p-4 inline-block hover:text-grey-darkest"
                        @click="hide"
                        title="Go Back">
                            <i class="fas fa-arrow-left"></i>
                        </span>
                        <span class="text-xl text-grey-darker align-middle cursor-pointer p-4 inline-block"
                            @click="$router.replace('/auth')"
                            title="Logout">
                            <i class="fas fa-sign-out-alt"></i>
                        </span>
                    </div>
                    <div class="px-4 pb-2 text-xl text-grey-darker font-bold">
                        Menu
                    </div>
                </div>
                
                <div class="appbar-content mb-4">
                    <div class="flex">
                        <div class="cursor-pointer hover:bg-grey-lightest w-1/2 bg-white border border-grey-light rounded h-48 ml-3 mr-2 my-1 flex items-center justify-center flex-col"
                        @click="goTo('/sites/create/?mode=current_site')">
                            <img src="/images/icons/create-from-url.png" class="w-24">
                            <div class="text-center w-1/2 text-md mt-4">
                                {{ $t('create_from_url') }}
                            </div>
                        </div>
                        <div class="cursor-pointer hover:bg-grey-lightest w-1/2 bg-white border border-grey-light rounded h-48 ml-2 mr-3 my-1 flex items-center justify-center flex-col">
                            <img src="/images/icons/create-note.png" class="w-24">
                            <div class="text-center w-1/2 text-md mt-4">
                                {{ $t('create_note') }}
                            </div>
                        </div>
                    </div>
                    <div class="flex">
                        <div class="cursor-pointer hover:bg-grey-lightest w-1/2 bg-white border border-grey-light rounded h-48 ml-3 mr-2 my-1 flex items-center justify-center flex-col">
                            <img src="/images/icons/generate-password.png" class="w-24">
                            <div class="text-center w-1/2 text-md mt-4">
                                {{ $t('generate_password') }}
                            </div>
                        </div>
                        <div class="cursor-pointer hover:bg-grey-lightest w-1/2 bg-white border border-grey-light rounded h-48 ml-2 mr-3 my-1 flex items-center justify-center flex-col">
                            <img src="/images/icons/report.png" class="w-24">
                            <div class="text-center w-1/2 text-md mt-4">
                                {{ $t('report') }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data(){
        return {
            isActive: false
        }
    },
    methods: {
        show(){
            this.isActive = true
        },
        hide(){
            this.isActive = false
        },
        goTo(location){
            this.$router.replace(location)
            this.hide()
        }
    }
}
</script>

