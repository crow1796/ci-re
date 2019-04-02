<template>
    <button class="text-white py-3 px-6 focus:outline-none"
     :type="type"
     :class="`bg-${appearance}`"
     @click="$emit('click')">
        <span :class="{ 'text-grey-dark': appearance == 'grey-lighter' }">
            {{ text }}
        </span>
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
        }
    }
}
</script>

