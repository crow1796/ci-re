<template>
    <button class="text-white py-3 px-6 focus:outline-none"
     :type="type"
     :class="`bg-${appearance}`"
     @click="$emit('click')">
        <span :class="{ 'text-grey-dark': appearance == 'grey-lighter' }"
            v-if="!isLoading">
            {{ text }}
        </span>
        <span class="fas fa-circle-notch fa-spin"
            v-if="isLoading"></span>
    </button>
</template>

<script>
export default {
    props: {
        type: {
            default: 'button'
        },
        appearance: {
            default: 'grey-lighter'
        },
        text: {
            required: true
        },
        isLoading: {
            default: false
        }
    },
    watch: {
        isLoading(to){
            console.log(to)
        }
    }
}
</script>

