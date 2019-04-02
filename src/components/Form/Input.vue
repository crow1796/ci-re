<template>
    <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" :for="name">
            {{ label }}
        </label>
        <input :class="`appearance-none border w-full py-4 px-3 text-grey-darker leading-tight outline-none focus:border-grey text-${size}`" 
        :id="name" 
        :type="type" 
        :placeholder="placeholder"
        :autocomplete="autocomplete">
    </div>
</template>

<script>
export default {
    props: {
        name: {
            required: true
        },
        label: {
            default: ''
        },
        placeholder: {
            default: ''
        },
        value: {
            default: null
        },
        type: {
            default: 'text'
        },
        size: {
            default: 'md'
        },
        autocomplete: {
            default: 'off'
        }
    }
}
</script>

