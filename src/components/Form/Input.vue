<template>
    <div class="mb-4">
        <label class="block text-grey-darker text-sm font-bold mb-2" :for="name">
            {{ label }}
        </label>
        <input :class="`appearance-none border w-full py-4 px-3 text-grey-darker leading-tight outline-none focus:border-grey text-${size}`" 
        :id="name" 
        :name="name"
        :type="type" 
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        v-model="model"
        v-validate="validationRules">
        <span class="text-red mt-2 inline-block text-right">{{ errors.first(name) }}</span>
    </div>
</template>

<script>
import FieldMixin from './Mixins/FieldMixin.vue'

export default {
    mixins: [FieldMixin],
    props: {
        type: {
            default: 'text'
        }
    }
}
</script>

