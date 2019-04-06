<template>
    <div class="empty-list text-center p-16">
        <button type="button" 
        class="rounded-full text-center bg-white text-lg w-6 h-6 outline-none focus:outline-none hover:bg-grey-lighter text-primary shadow"
        @click="$emit('add-clicked')">
            +
        </button>
        <div class="text-center mt-8">
            <div class="rounded-full bg-grey-lighter w-32 h-32 flex items-center justify-center mx-auto">
                <i class="text-4xl text-grey-light" :class="icon"></i>
            </div>
            <div class="font-bold mt-8 text-grey-darker">
                {{ heading }}
            </div>
            <div class="mt-4 text-grey-darker">
                {{ subheading }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        heading: {
            required: true
        },
        subheading: {
            required: true
        },
        icon: {
            default: 'fas fa-check'
        }
    }
}
</script>
