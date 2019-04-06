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
        <div class="p-3 overflow-auto card-list">
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
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            sites: 'sites/sites'
        })
    }
}
</script>

