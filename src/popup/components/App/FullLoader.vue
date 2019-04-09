<i18n>
{
    "en-US": {
        "waiting_text": "Please wait..."
    },
    "es-ES": {
        "waiting_text": "Por favor espera ......"
    }
}
</i18n>

<template>
    <div class="full-loader fixed pin bg-smoke z-10">
        <span class="absolute pin flex items-center justify-center text-white">
            <div class="text-center">
                <i class="fas fa-circle-notch fa-spin text-4xl"></i>
                <div class="mt-3">
                    {{ $t('waiting_text') }}
                </div>
            </div>
        </span>
    </div>
</template>

<script>
export default {
}
</script>

